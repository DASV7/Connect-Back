const { Router } = require('express');
const route = Router();
const { getUsersById, createNewUser } = require("../lib/usersModule/usersModule.controller")

module.exports = (app) => {
    //define Route users
    app.use("/usersmodule", route)

    /**
     * @swagger
     * /api/v1/usersModule:
     *  get:
     *    description: Obtiene una lista de usuarios con su ID
     *    responses:
     *      200:
     *        description: Usuarios consultados correctamente
     *      500:
     *        description: Ocurrió un error inesperado
     *    parameters:
     *      - name: options
     *        in: query
     *        description: Opciones de consulta
     *        required: false
     */

    route.get('/', getUsersById);


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

    route.post('/', createNewUser);
}