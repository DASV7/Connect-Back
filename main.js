const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const routes = require("./src/routes")
const connectDbMongo = require("./src/services/db/dbConnection.js")
const config = require('./src/config/index')
const optionsSwagger = require('./src/loaders/swagger')
const socketIOClient = require('socket.io-client');

const getTokenFromHeader = require('./src/mddlewares/authM')


global.success = require("./src/helpers/responses").success;
global.error = require("./src/helpers/responses").error;

require('dotenv').config();

const app = express()

//Add Cors
app.use(cors(config.cors))

//parse informationMongo
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//db Conection
connectDbMongo()

//socket  io
const MAX_RECONNECT_ATTEMPTS = 5; // Número máximo de intentos de reconexión
const RECONNECT_INTERVAL = 3000; // Intervalo de tiempo entre cada intento de reconexión en milisegundos

let reconnectAttempts = 0;
let socket;

function connectToSocket() {
  socket = socketIOClient(process.env.SOCKET || config.socket);
  socket.on('connect', () => {
    console.log('Socket connected');
    reconnectAttempts = 0;
  });
  
  socket.on('disconnect', () => {
    console.log('Socket disconnected');
    if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
      setTimeout(connectToSocket, RECONNECT_INTERVAL);
      reconnectAttempts++;
    }
  });
  global.socket = socket;
}

connectToSocket();

//swagger Implementation
const swaggerSpec = swaggerJSDoc(optionsSwagger);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(getTokenFromHeader)

//call routes with prefix
app.use(config.api.prefix, routes());

app.listen(process.env.PORT || config.port, (params) => {
  console.log(`
    ####################################################
    Server listening on port: http://localhost:${config.port}
    ####################################################
    `);
})
