const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://localhost:27017/ganaderiabasto"

mongoose.connect(MONGODB_URI, {

})

const objectdb = mongoose.connection

objectdb.on("connected", () => {console.log("Connected to Mongodb")})
objectdb.on("error", () => {console.log("Error connecting to Mongodb")})

module.exports = mongoose