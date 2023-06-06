const userService = require("./usersModule.service")

const users = (module.exports = {})


users.createNewUser = async (req, res) => {
    try {
        const result = await userService.createNewUser(req.body)
        res.status(200).json({ error: false, data: result });
    } catch (error) {
        console.log("Error tan sapo perro", error);
        res.status(500).json({ error: false, data: result });
    }

}

users.getUsersById = async (req, res) => {
    try {
        console.log("Felicidades entraste a tu reino")
        res.status(200).json({ data: true })
    } catch (error) {
        console.log("Error tan sapo perro", error);
    }
}
