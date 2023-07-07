const { createUser, loginUser, deleteAccount,updateProfile } = require("./usersModule.service");

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
  },
  
  deleteAccount: async (req, res) => {
    try {
      const state = await deleteAccount(req.body);
      res.status(200).json(state);
    } catch (error) {
      console.log("Erorr al traer datos del usuario:", error.message);
      res.status(error.codeStatus).json(error);
    }
  },
  updateProfile: async (req, res) => {
    try {
      const state = await updateProfile(req.body, req.token);
      res.status(200).json(state);
    } catch (error) {
      console.log("Erorr al traer datos del usuario:", error.message);
      res.status(error.codeStatus).json(error);
    }
  },
};