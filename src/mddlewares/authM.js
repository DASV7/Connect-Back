const EndPointsWithoutToken = require("../utils/other/endPointsWithOutToken");
const { verifyTokenSimpleSecret } = require("./verifyTokenSecret");
const jwt_decode = require("jwt-decode");
const User = require("../models/users.model");
/**
 * Servicio para manejar todas las solicitudes
 * @param req solicitud entrante
 */
const getTokenFromHeader = async (req, res, next) => {

    if (EndPointsWithoutToken.includes(req.url)) {
        next();
        return { status: true, code: 201, msg: "No necesita token", data: null };
    }
    if (req.headers['vinc-jwt']) {
        const resToken = await verifyTokenSimpleSecret(req.headers['vinc-jwt']);
        if (resToken.status) {
            req.token = jwt_decode(req.headers['vinc-jwt'])
            const user = await userActive(req.token._id);

            if (!user) return res.status(200).json({ status: false, notUser: true, message: "Usuario invalido y/o no activo" });
            next();
            return {
                status: true,
                code: 200,
                msg: "Token Válido",
                data: resToken.data,
            };
        }

    }
    return res.status(401).json({ status: false, code: 401, msg: "Sin Token de Autorización" });
};

const userActive = async (_id) => {
    if (!_id) return null;
    const userActual = await User.findOne({ _id }).lean()
    return !userActual ? false : userActual?.bloqued ? false : true;
}

module.exports = getTokenFromHeader;