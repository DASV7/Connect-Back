const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    api: {
        prefix: '/api/v1/'
    },
    mongo: {
        MONGO_USERNAME: "dasvv",
        MONGO_PASS: "dasv",
        MONGO_DB: "pruebas",
    },
    tokenSecret: process.env.TOKEN_SECRET,
    cors: process.env.CORS || '*',
    port: 3001
}