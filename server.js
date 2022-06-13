//First install express

const express = require("express")
const app = express()

//Import connection to mongodb
const archiveDB = require("./connection")

//Import of the routes file and establishment model
const routeestablishment = require("./routes/establishment")

//Import body parser, obtener de los campos del formulario la informacion
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: "true"}))

app.use("/api/establishment", routeestablishment)

//Create a route, example
app.get("/", (req, res) => {
    res.end("Server Backend Nodemon Running")
})
//Congfigure basic server

app.listen(5000, function(){
    console.log("The server is running correctly")
})



