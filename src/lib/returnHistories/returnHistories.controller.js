const { returnHistories } = require("../../lib/returnHistories/returnHIstories.service");

const modules = (module.exports = {});

modules.returnHistories = async (req, res) => {
  try {
    const state = await returnHistories(req.token);
    res.status(200).json(state);
  } catch (error) {
    console.log("Error al subir la Historia", error.message);
    res.status(500).json({ error: "Error al obtener las historias" });
  }
};
