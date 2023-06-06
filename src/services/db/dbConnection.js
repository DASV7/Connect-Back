const mongoose = require('mongoose')
const config = require("../../config")


function connectDbMongo() {
    const uri = `mongodb+srv://${config.mongo.MONGO_USERNAME}:${config.mongo.MONGO_PASS}@cluster0.gbdva.mongodb.net/${config.mongo.MONGO_DB}?retryWrites=true&w=majority`;
    mongoose.set("strictQuery", false);
    mongoose.connect(uri).then(e => console.log("✅---------Connected to MongoDB Succesfully--------✅"))
        .catch(e => console.log)
}
module.exports = connectDbMongo
