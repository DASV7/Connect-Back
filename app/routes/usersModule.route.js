const { Router } = require('express');
const route = Router();
const { createNewUser, initSesionUser, deleteAccount, updateProfile } = require("../lib/usersModule/usersModule.controller")
const { isMongoReady } = require("../helpers/validateRoute.mdwr");
const { serviceUploadFiles } = require("../lib/firebase/firebaseUpload");

const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() });
module.exports = (app) => {
    app.use("/usersmodule", route)

    /**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Endpoints relacionados con usuarios
 */

    /**
     * @swagger
     * /api/v1/usersModule:
     *   post:
     *     tags: [Usuarios]
     *     description: Crea un usuario
     *     responses:
     *       200:
     *         description: Usuario creado correctamente
     *       500:
     *         description: Ocurrió un error inesperado
     *     parameters:
     *       - name: options
     *         in: query
     *         description: Opciones de consulta
     *         required: false
     */

    route.post('/', isMongoReady, createNewUser);

    /**
     * @swagger
     * /api/v1/usersModule/login:
     *   post:
     *     tags: [Usuarios]
     *     description: Login de usuario
     *     responses:
     *       200:
     *         description: Usuario Logueado  correctamente
     *       500:
     *         description: Ocurrió un error inesperado
     *     parameters:
     *       - name: options
     *         in: query
     *         description: Opciones de consulta
     *         required: false
     */
    route.post('/login', isMongoReady, initSesionUser);

    /**
     * @swagger
     * /api/v1/usersModule/updloadpicture:
     *   post:
     *     tags: [Usuarios]
     *     description: Crea un usuario
     *     responses:
     *       200:
     *         description: Usuario creado correctamente
     *       500:
     *         description: Ocurrió un error inesperado
     *     parameters:
     *       - name: options
     *         in: query
     *         description: Opciones de consulta
     *         required: false
     */
    route.post('/updloadpicture', upload.single("filename"), serviceUploadFiles);

    /**
     * @swagger
     * /api/v1/deleteAccount:
     *   post:
     *     tags: [Usuarios]
     *     description: delete Account
     *     responses:
     *       200:
     *         description: Usuario creado correctamente
     *       500:
     *         description: Ocurrió un error inesperado
     *     parameters:
     *       - name: options
     *         in: query
     *         description: Opciones de consulta
     *         required: false
     */
    route.delete('/deleteAccount', deleteAccount );

    /**
     * @swagger
     * /api/v1/deleteAccount:
     *   post:
     *     tags: [Usuarios]
     *     description: delete Account
     *     responses:
     *       200:
     *         description: Usuario creado correctamente
     *       500:
     *         description: Ocurrió un error inesperado
     *     parameters:
     *       - name: options
     *         in: query
     *         description: Opciones de consulta
     *         required: false
     */
    route.patch('/updateProfile', updateProfile );


}