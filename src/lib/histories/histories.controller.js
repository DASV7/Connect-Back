const { uploadHistories } = require("../firebase/firebaseHistories");

const modules = (module.exports = {});

modules.uploadHistories = async (req, res) => {
  try {
    const state = await uploadHistories(req, res);
    res.status(200).json(state);
  } catch (error) {
    console.log("Error al subir la Historia", error.message);
    res.status(error.codeStatus).json(error);
  }
};
