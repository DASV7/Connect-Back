const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const routes = require("./app/routes")
const connectDbMongo = require("./app/services/db/dbConnection.js")
const config = require('./app/config/index')
const optionsSwagger = require('./app/loaders/swagger')
const socketIOClient = require('socket.io-client');


global.success = require("./app/helpers/responses").success;
global.error = require("./app/helpers/responses").error;

require('dotenv').config();

const app = express()

//Add Cors
app.use(cors(config.cors))

//parse informationMongo
app.use(bodyParser.json())

//db Conection
connectDbMongo()

//socket  io
const socket = socketIOClient(process.env.SOCKET || config.socket,);
global.socket = socket;

//swagger Implementation
const swaggerSpec = swaggerJSDoc(optionsSwagger);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//call routes with prefix
app.use(config.api.prefix, routes());

app.listen(process.env.PORT || config.port, (params) => {
    console.log(`
    ####################################################
    Server listening on port: http://localhost:${config.port}
    ####################################################
    `);
})
