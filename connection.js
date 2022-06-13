const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ganaderiabasto")

const objectdb = mongoose.connection

objectdb.on("connected", () => {console.log("Connected to Mongodb")})
objectdb.on("error", () => {console.log("Error connecting to Mongodb")})

module.exports = mongoose