const { Router } = require('express');
const { followUser, getFollow } = require('../lib/followers/followers.controllers');

const route = Router();

module.exports = (app) => {
    app.use("/followers", route)

    /**
     * @swagger
     * /api/v1/viewlikes:
     *   get:
     *     tags: [Usuarios]
     *     description: Obtener likes a usuario
     *     responses:
     *       200:
     *         description: get  correctamente
     *       500:
     *         description: Ocurrió un error inesperado
     *     parameters:
     *       - name: options
     *         in: query
     *         description: Opciones de consulta
     *         required: false
     */
    route.post('/', followUser);
        /**
     * @swagger
     * /api/v1/viewlikes:
     *   get:
     *     tags: [Usuarios]
     *     description: Obtener likes a usuario
     *     responses:
     *       200:
     *         description: get  correctamente
     *       500:
     *         description: Ocurrió un error inesperado
     *     parameters:
     *       - name: options
     *         in: query
     *         description: Opciones de consulta
     *         required: false
     */
        route.get('/getFollow', getFollow);
}