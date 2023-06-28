const User = require("../../models/users.model");
const jwt = require('jsonwebtoken');
const bycrypt = require("bcryptjs");
const { userprojection } = require("../../services/projects/users");
const config = require("../../config/index");

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
        const token = jwt.sign(user, config.tokenSecret);
        return { message: "Usuario logueado con exito", data: token };

    },
};