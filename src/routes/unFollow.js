const { Router } = require('express');
const { unFollow  } = require('../lib/unFollow/unFollow.controller');

const route = Router();

module.exports = (app) => {
    app.use("/unFollow", route)

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
    route.delete('/', unFollow);
}