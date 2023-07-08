const { getConversations, getMessagesWithId, sendMessage ,undoMatch } = require('../lib/messages/messages.controller');

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
     * /api/v1/messages/conversations:
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

    route.get('/conversations', getConversations);

    /**
     * @swagger
     * /api/v1/messages:
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

    route.get('/', getMessagesWithId);


    /**
    * @swagger
    * /api/v1/messages:
    *   post:
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

    route.post('/', sendMessage);


    /**
    * @swagger
    * /api/v1/messages:
    *   post:
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
    route.get('/undomatch', undoMatch);
}