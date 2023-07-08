const User = require("../../models/users.model");
const Conversation = require("../../models/conversation");
const Like = require("../../models/likesuser");
const Messages = require("../../models/messages.model");
const Preferences = require("../../models/preferences");
const RejectedUser = require("../../models/rejectedUsers");

const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");
const { userprojection } = require("../../services/projects/users");
const config = require("../../config/index");
const { welcomeMessage } = require("../emails/welcome.email")

module.exports = {
  createUser: async (body) => {
    body.birthday = new Date(body.birthday);
    const user = body;
    const dataVoid = Object.keys(user).filter((key) => !user[key]);
    const passwordDecript = user.password;
    if (dataVoid.length)
      throw {
        message: `${dataVoid.join(", ")} ${dataVoid.length === 1 ? "es requerido" : "son requeridos"} para crear el usuario`,
        codeStatus: 400,
      };
    const salt = await bycrypt.genSalt(10);
    user.password = await bycrypt.hash(user.password, salt);

    let dbUser = await User.create({ ...user, passwordDecript });
    dbUser = JSON.parse(JSON.stringify(dbUser));
    const newUser = {};
    userprojection.split(" ").forEach((key) => {
      if (dbUser[key]) newUser[key] = dbUser[key];
    });

    // Emitir el evento de like al backend "socket"
    // global.socket.emit('like', { like: true });

    welcomeMessage(newUser)
    const token = jwt.sign(newUser, config.tokenSecret);
    return { message: "Usuario creado con exito", data: token, id: dbUser._id };
  },
  loginUser: async (query) => {
    const { email, password } = query;
    const user = await User.findOne({ email }, userprojection + " password").lean();
    if (!user) throw { message: "El usuario no existe", codeStatus: 404 };
    const isMatch = await bycrypt.compare(password, user.password);
    if (!isMatch) throw { message: "Contraseña incorrecta", codeStatus: 401 };
    delete user.password;
    await User.findOneAndUpdate({ _id: user._id }, { $set: { lastLogin: new Date() } }, { new: true });
    const token = jwt.sign(user, config.tokenSecret);
    return { message: "Usuario logueado con exito", data: token };
  },
  updateProfile: async (params, token) => {
    const userData = {
      _id: token._id,
      ...params,
    };
    const updateProfile = await User.findByIdAndUpdate(token._id, userData, { upsert: true, new: true }, userprojection).lean();
    const newToken = jwt.sign(updateProfile, config.tokenSecret);
    return newToken;
  },
  deleteAccount: async (params) => {
    if (!params._id) return null;
    const conversations = await Conversation.find({ members: { $in: [params._id] }, type: { $in: ["match", "random"] } }, "_id").lean();
    if (conversations.length) {
      const conversationsIds = conversations.map((e) => e._id);
      await Conversation.deleteMany({ members: { $in: [params._id] }, type: { $in: ["match", "random"] } });
      await Messages.deleteMany({ conversationId: { $in: [...conversationsIds] } });
    }
    await Like.deleteMany({ $or: [{ idUser: params._id }, { userWhoLike: params._id }] });
    await RejectedUser.deleteMany({ $or: [{ idUser: params._id }, { userRejected: params._id }] });
    await Preferences.deleteMany({ idUser: params._id });
    await User.deleteOne({ _id: params._id });
    return true;
  },
};
