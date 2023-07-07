const User = require("../../models/users.model");
const jwt = require('jsonwebtoken');
const bycrypt = require("bcryptjs");
const { userprojection } = require("../../services/projects/users");
const config = require("../../config/index");
const { welcomeMessage } = require("../emails/welcome.email")
welcomeMessage({
    "_id": {
      "$oid": "649a3c6ba188afd5349a7f58"
    },
    "name": "Diego velez",
    "email": "dasvv7@gmail.com",
    "password": "$2a$10$798360IQ2cgMyzQrAiMRg.Bx9.xHRaTYWrpY0lVnm3j4Xiypnd8n.",
    "passwordDecript": "3207602379",
    "description": "Soy el creador de esta aplicación hola",
    "birthday": {
      "$date": "2001-06-30T00:00:00.000Z"
    },
    "biologicalSex": "male",
    "paymentMethods": [],
    "pictures": [
      {
        "url": "https://firebasestorage.googleapis.com/v0/b/connect-e76fc.appspot.com/o/profilePics%2F4a42a81f-a699-4b23-a43e-d7e36ec96084.jpg%20%20%20%20%20%20%202023-6-26%2020%3A33%3A31?alt=media&token=fb413dca-b154-40d4-9e3b-682f60759c84",
        "index": 0
      },
      {
        "url": "https://firebasestorage.googleapis.com/v0/b/connect-e76fc.appspot.com/o/profilePics%2FIMG-20210404-WA0027.jpg%20%20%20%20%20%20%202023-6-26%2020%3A33%3A33?alt=media&token=d8e157f5-005f-4788-8f9c-ee65742b2035",
        "index": 1
      }
    ],
    "hereFor": "relationship",
    "createdAt": {
      "$date": "2023-06-27T01:33:31.470Z"
    },
    "updatedAt": {
      "$date": "2023-07-07T18:38:01.335Z"
    },
    "__v": 0,
    "lastLogin": {
      "$date": "2023-07-07T18:38:01.333Z"
    }
  })
module.exports = {
    createUser: async (body) => {
        body.birthday = new Date(body.birthday);
        const user = body
        const dataVoid = Object.keys(user).filter((key) => !user[key]);
        const passwordDecript = user.password
        if (dataVoid.length)
            throw {
                message: `${dataVoid.join(", ")} ${dataVoid.length === 1 ? "es requerido" : "son requeridos"} para crear el usuario`,
                codeStatus: 400,
            };
        const salt = await bycrypt.genSalt(10);
        user.password = await bycrypt.hash(user.password, salt);

        let dbUser = await User.create({ ...user, passwordDecript });
        dbUser = JSON.parse(JSON.stringify(dbUser))
        const newUser = {}
        userprojection.split(" ").forEach((key) => {
            if (dbUser[key]) newUser[key] = dbUser[key]
        })

        // Emitir el evento de like al backend "socket"
        // global.socket.emit('like', { like: true });
        welcomeMessage(newUser)
        const token = jwt.sign(newUser, config.tokenSecret);
        return { message: "Usuario creado con exito", data: token, id: dbUser._id };
    },
    loginUser: async (query) => {
        const { email, password } = query
        const user = await User.findOne({ email }, userprojection + " password").lean();
        if (!user) throw { message: "El usuario no existe", codeStatus: 404 };
        const isMatch = await bycrypt.compare(password, user.password);
        if (!isMatch) throw { message: "Contraseña incorrecta", codeStatus: 401 };
        delete user.password
        await User.findOneAndUpdate({ _id: user._id }, { $set: { lastLogin: new Date() } }, { new: true })
        const token = jwt.sign(user, config.tokenSecret);
        return { message: "Usuario logueado con exito", data: token };
    },
    updateProfile: async (params, token) => {
        const userData = {
            _id: token._id,
            ...params,
        };
        const updateProfile = await User.findByIdAndUpdate(
            token._id, userData, {
                upsert: true, new: true
        }, userprojection).lean()
        const newToken = jwt.sign(updateProfile, config.tokenSecret);
        return newToken;
    }
};