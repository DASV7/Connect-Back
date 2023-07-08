const errorMessages = {
    'jwt expired': {
        message: 'Token expiró',
        code: 901,
    },
    'jwt malformed': {
        message: 'Token malformado',
        code: 902,
    },
    'invalid signature': {
        message: 'Firma del token inválida',
        code: 903,
    },
    'jwt signature is required': {
        message: 'La firma del token es requerida',
        code: 904,
    },
    default: {
        message: 'Error con el token',
        code: 905,
    },
};

module.exports = errorMessages