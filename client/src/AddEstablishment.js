import React, { useState } from "react";
import uniquid from "uniqid";
import axios from "axios"

function AddEstablishment() {

//Hooks
const [name, setName] = useState("");
const [kg, setKg] = useState("");
const [paddock, setPaddock] = useState("");
const [device, setDevice] = useState("");
const [numdevice, setNumdevice] = useState("");

//This function allows me to save dates on data base
  function addEstablishment() {
    var establishment = {
      name : name,
      kg : kg,
      paddock : paddock,
      device : device,
      numdevice : numdevice,
      idestablishment: uniquid()
    }
    console.log(establishment)

    //Create a route to create the establishment
    axios.post("/api/establishment/addestablishment", establishment)
    .then(res => {
      alert("res.data")
    })
    .then(err => {console.log(err)})
  }


  return (
    <div className="container">
      <div className="row">
          <h2 className="mt-4">Crear nuevo establecimiento</h2>

      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Tipo de Animal</label>
            <input type="text" className="form.control" value={name} onChange={(e) => {setName(e.target.value)}}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="Kg" className="form-label">Peso en Kg</label>
            <input type="number" className="form.control" value={kg} onChange={(e) => {setKg(e.target.value)}}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="paddock" className="form-label">Nombre de potrero</label>
            <input type="text" className="form.control" value={paddock} onChange={(e) => {setPaddock(e.target.value)}}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="device" className="form-label">Tipo de Dispositivo</label>
            <input type="text" className="form.control" value={device} onChange={(e) => {setDevice(e.target.value)}}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="numdevice" className="form-label">Número de dispositivo</label>
            <input type="text" className="form.control" value={numdevice} onChange={(e) => {setNumdevice(e.target.value)}}></input>
          </div>
          <button  onClick={addEstablishment} className="btn btn-success">Guardar establecimiento</button>
        </div>
      </div>
    </div>
  )
}

export default AddEstablishment;