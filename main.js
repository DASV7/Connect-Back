const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const routes = require("./src/routes")
const connectDbMongo = require("./src/services/db/dbConnection.js")
const config = require('./src/config/index')
const optionsSwagger = require('./src/loaders/swagger')


require('dotenv').config();

const app = express()

//Add Cors
app.use(cors(config.cors))

//parse informationMongo
app.use(bodyParser.json())

//db Conection
connectDbMongo()

//swagger Implementation
const swaggerSpec = swaggerJSDoc(optionsSwagger);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//call routes with prefix
app.use(config.api.prefix, routes());

app.listen(config.port, (params) => {
    console.log(`
    ####################################################
    Server listening on port: http://localhost:${config.port}
    ####################################################
    `);
})
