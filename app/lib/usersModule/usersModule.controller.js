const { createUser, loginUser } = require("./usersModule.service");

module.exports = {
  createNewUser: async (req, res) => {
    try {
      const state = await createUser(req.body);
      return global.success(res, {
        data: { message: state.message, data: state.data, id: state.id },
        statusCode: 201,
      });
    } catch (error) {
      console.log("ERROR CREATE USER:", error.message);
      return global.error(res, {
        error: { message: error.message },
        statusCode: error.codeStatus || 500,
      });
    }
  },
  initSesionUser: async (req, res) => {
    try {
      const state = await loginUser(req.body);
      return global.success(res, {
        data: { message: state.message, data: state.data },
        statusCode: 201,
      });
    } catch (error) {
      console.log("ERROR CREATE USER:", error.message);
      return global.error(res, {
        error: { message: error.message },
        statusCode: error.codeStatus || 500,
      });
    }
  }

};