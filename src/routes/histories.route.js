const { Router } = require('express');
const route = Router();

const { uploadHistories } = require('../lib/histories/histories.controller');

const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() });
module.exports = (app) => {
    app.use("/histories", route)

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

    route.post('/create', upload.single("histories"), uploadHistories);
}