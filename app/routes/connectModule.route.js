const { Router } = require('express');
const route = Router();
const { getListFilters } = require('../lib/connect/connect.controller');

module.exports = (app) => {
    app.use("/connect", route)

    /**
    * @swagger
    * tags:
    *   name: Connect
    *   description: Endpoints relacionados con el sistema de Conexiones
    */

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

    route.post('/', getListFilters);
}