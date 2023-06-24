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

const getTokenFromHeader = require('./app/mddlewares/authM')


global.success = require("./app/helpers/responses").success;
global.error = require("./app/helpers/responses").error;

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
const socket = socketIOClient(process.env.SOCKET || config.socket,);
console.log("&&&&&&&&&&&&&&  process.env.SOCKET", process.env.SOCKET);
global.socket = socket;

global.socket.emit("connect/newLike", {
  token: { _id: 123123123 },
  user: {
    "_id": {
      "$oid": "64891301d3807b00c5a21eaa"
    },
    "name": "La mujer de tus sueños",
    "email": "dasvv9@gmail.com",
    "description": "Soy lisa peach la de las nalgotas",
    "birthday": {
      "$date": "2005-12-02T00:00:00.000Z"
    },
    "biologicalSex": "female",
    "pictures": [
      {
        "url": "https://firebasestorage.googleapis.com/v0/b/connect-e76fc.appspot.com/o/profilePics%2Flissa.jpeg%20%20%20%20%20%20%202023-6-13%2020%3A8%3A17?alt=media&token=0422f21d-c2be-4849-8f2f-ba4e233ee3e1",
        "index": 0
      },
      {
        "url": "https://firebasestorage.googleapis.com/v0/b/connect-e76fc.appspot.com/o/profilePics%2Flissa%202.jpeg%20%20%20%20%20%20%202023-6-13%2020%3A8%3A19?alt=media&token=9a1b9d14-de3e-4288-bc08-a456cdadff25",
        "index": 1
      }
    ],
    "hereFor": "contact",
  }
});

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
