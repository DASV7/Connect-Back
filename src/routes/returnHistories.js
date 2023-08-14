const { Router } = require('express');
const route = Router();
const { returnHistories } = require('../lib/returnHistories/returnHistories.controller');

module.exports = (app) => {
    app.use("/returnHistories", route)
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

    route.get('/', returnHistories);
}