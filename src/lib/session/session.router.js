const Router = require("express").Router();
const { isMongoReady } = require("../../helpers/validateRoute.mdlwr");
const { login } = require("./session.controller");
const { validateFields } = require("./session.mdlwr");

/**
*  @swagger
*  /api/v1/session:
*  post:
*    description: Valida usuario
*    responses:
*      200:
*        description: Sesión correcta
*      500:
*        description: La información no es correcta
*    parameters:
*      - name: options
*        in: query
*        description: Opciones de consulta
*        required: false
*/

Router.post("/", [isMongoReady, validateFields], login);

module.exports = Router;