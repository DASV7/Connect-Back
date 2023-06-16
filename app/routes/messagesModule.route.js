const { getMessagesUser } = require('../lib/messages/messages.controller');

const { Router } = require('express');
const route = Router();


module.exports = (app) => {
    app.use("/messages", route)

    /**
 * @swagger
 * tags:
 *   name: viewlikes
 *   description: Endpoints relacionados con usuarios
 */

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

    route.get('/conversations', getMessagesUser);
}