const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    api: {
        prefix: '/api/v1/'
    },
    socket: "http://localhost:5500",
    mongo: {
        MONGO_USERNAME: "dasvv",
        MONGO_PASS: "dasv",
        MONGO_DB: "pruebas",
    },
    tokenSecret: process.env.TOKEN_SECRET || "secret-key-vinc",
    cors: process.env.CORS || '*',
    port: 3001,
    socket: process.env.SOCKET || "http://localhost:5500",
}