const EndPointsWithoutToken = require("../utils/other/endPointsWithOutToken");
const { verifyTokenSimpleSecret } = require("./verifyTokenSecret");
const jwt_decode = require("jwt-decode");
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

module.exports = getTokenFromHeader;