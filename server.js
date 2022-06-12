//First install express

const express = require("express")
const app = express()

//Congfigure basic server

app.listen(5000, function(){
    console.log("The server is running correctly")
})

//Create a route, example
app.get("/", (req, res) => {
    res.end("Server Backend Nodemon Running")
})

//Import connection to mongodb
const archiveDB = require("./connection")

//Import of the routes file and establishment model
const routeestablishment = require("./routes/establishment")

app.use("/api/establishment", routeestablishment)