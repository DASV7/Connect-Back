const config = require('../../config/index')
const EndPointsWithoutToken = [
    config.api.prefix + 'usersmodule/login',
    config.api.prefix + 'usersModule',    
]
module.exports = EndPointsWithoutToken