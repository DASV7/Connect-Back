const { userPreferences  } = require('../lib/userPreferences/userPreferences.controller');

const { Router } = require('express');
const route = Router();


module.exports = (app) => {
    app.use("/userPreferences", route)

    /**
    * @swagger
    * /api/v1/messages:
    *   post:
    *     tags: [Usuarios]
    *     description: post de las preferencias
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

    route.post('/', userPreferences);

}