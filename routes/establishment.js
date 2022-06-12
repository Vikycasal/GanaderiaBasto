// Let's create the model
const express = require("express")
const router = express.Router()

const mongoose = require("mongoose")
const eschema = mongoose.Schema

const eschemaEstablihsment = new eschema({
    name : String,
    kg : Number,
    paddock : String,
    device : String,
    numdevice : String,
    idestablishment : String
})

const ModelEstablishment = mongoose.model("establishment", eschemaEstablihsment)

module.exports = router

//This is an example
// router.get("/ejemplo", (req, res) => {
//     res.end("aqui")
// })

//Add establishments
router.post("/addestablishment", (req, res) => {
    const newestablishment = new ModelEstablishment({
        name: req.body.name,
        kg: req.body.kg,
        paddock: req.body.paddock,
        device: req.body.device,
        numdevice: req.body.numdevice,
        idestablishment: req.body.idestablishment
    })
    newestablishment.save(function(err) {
        if(!err) {
            res.send("Establishment add succesfully")
        } else {
            res.send(err)
        }
    })
})

