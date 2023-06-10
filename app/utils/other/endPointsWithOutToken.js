const config = require('../../config/index')
const EndPointsWithoutToken = [
    config.api.prefix + 'usersmodule/login',
    config.api.prefix + 'usersModule',
    config.api.prefix + '/authentication/recovery',
    config.api.prefix + '/authentication/validateToken',
    config.api.prefix + '/user/changePWDCognito'
]
module.exports = EndPointsWithoutToken