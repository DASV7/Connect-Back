const { findUserProfile } = require("../lib/profile/profile.controller");

const { Router } = require("express");
const route = Router();

module.exports = (app) => {
  app.use("/profile", route);

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

  route.get("/", findUserProfile);
};
