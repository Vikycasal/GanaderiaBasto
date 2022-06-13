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
router.post("/addestablishment", (req, res) =>{
    const newestablishment = new ModelEstablishment({
        name: req.body.name,
        kg: req.body.kg,
        paddock: req.body.paddock,
        device: req.body.device,
        numdevice: req.body.numdevice,
        idestablishment: req.body.idestablishment
    })
    newestablishment.save(function(err){
        if(!err) {
            res.send("Establishment add successfully")
        } else {
            res.send(err)
        }
    })
})

//Get establishments
router.get("/getestablishment", (req, res) => {
    ModelEstablishment.find({}, function(docs, err){
        if(!err) {
            res.send("Obtenido")
        } else {
            res.send(err)
        }
    })
})

//Get data establishments
router.post("/getdataestablishment", (req, res) => {
    ModelEstablishment.find({idestablishment:req.body.idestablishment}, function(docs, err){
        if(!err) {
            res.send("Obtenido")
        } else {
            res.send(err)
        }
    })
})

//Edit establishments
router.post("/newestablishment", (req, res) =>{
    ModelEstablishment.findOneAndUpdate({idestablishment:req.body.idestablishment}), {
        name: req.body.name,
        kg: req.body.kg,
        paddock: req.body.paddock,
        device: req.body.device,
        numdevice: req.body.numdevice
    }, (err)=>{
        if(!err) {
            res.send("Establishment edit succesfully")
        }else {
            res.send(err)
        }
    }
})
