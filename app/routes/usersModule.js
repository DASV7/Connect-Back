const { Router } = require('express');
const route = Router();
const { createNewUser, initSesionUser } = require("../lib/usersModule/usersModule.controller")
const { isMongoReady } = require("../helpers/validateRoute.mdwr");

module.exports = (app) => {
    app.use("/usersmodule", route)

    /**
     * @swagger
     * /api/v1/usersModule:
     *  post:
     *    description: Crea un usuario
     *    responses:
     *      200:
     *        description: Usuario creado correctamente
     *      500:
     *        description: Ocurrió un error inesperado
     *    parameters:
     *      - name: options
     *        in: query
     *        description: Opciones de consulta
     *        required: false
     */

    route.post('/', isMongoReady, createNewUser);

    /**
    * @swagger
    * /api/v1/usersModule:
    *  post:
    *    description: Login de usuario
    *    responses:
    *      200:
    *        description: Usuario Logeado correctamente
    *      500:
    *        description: Ocurrió un error inesperado
    *    parameters:
    *      - name: options
    *        in: query
    *        description: Opciones de consulta
    *        required: false
    */
    route.post('/login', isMongoReady, initSesionUser);


}