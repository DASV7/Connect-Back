const errorMessage = require("../utils/other/tokenExceptions");
const config = require("../config/index");
const jwt = require("jsonwebtoken");
module.exports = {
    /**
     * Verifies a token using a simple secret.
     *
     * @param {string} token - The token to be verified.
     * @return {Object} An object containing the status of the verification and related data.
     */
    verifyTokenSimpleSecret: (token) => {
        try {
            const decoded = jwt.verify(token, config.tokenSecret, { algorithms: ['HS256'] });
            return {
                status: true,
                data: decoded,
            }
        } catch (err) {
            const error = errorMessage[err.message] || errorMessage.default;
            return {
                status: false,
                data: err,
                code: error.code,
                msg: error.message
            }
        }
    }
}