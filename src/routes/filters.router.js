const { Router } = require('express');
const route = Router();
const { filters } = require('../lib/filters/filters.controller');

module.exports = (app) => {
    app.use("/filters", route)

    /**
     * @swagger
     * /api/v1/Connect:
     *   post:
     *     tags: [Connect]
     *     description: Obtener lista de usuarios Connect
     *     responses:
     *       200:
     *         description: Usuarios obtenidos
     *       500:
     *         description: Error al obtener los usuarios Connect
     *     parameters:
     *       - name: options
     *         in: query
     *         description: Opciones de consulta
     *         required: false
     */

    route.post('/');
}