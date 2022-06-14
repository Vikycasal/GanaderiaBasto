import React, { useState } from "react";
import uniquid from "uniqid";
import axios from "axios"
import styles from "./styles/addestablishment.css"

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
      alert(res.data)
    })
    .then(err => {console.log(err)})
  }


  return (
    <div className="container">
      <div className="row">
          <h2 className="mt-4">Create new establishment</h2>
      </div>
      <div className="row">
        <form>
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Type of animal</label>
            <br></br>
            <select className="form1" value={name} onChange={(e) => {setName(e.target.value)}}>
             <option>Select an animal</option>
              <option>Steer</option>
              <option>Bull</option>
              <option>Heifer</option>
            </select>
        </div>
          <div className="mb-3">
            <label htmlFor="Kg" className="form-label">Weight in Kg</label>
            <br></br>
            <input type="number" className="form.control" value={kg} onChange={(e) => {setKg(e.target.value)}}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="paddock" className="form-label">Paddock name</label>
            <br></br>
            <input type="text" placeholder="Max 200 characters" maxLength={200} className="form3" value={paddock} onChange={(e) => {setPaddock(e.target.value)}}></input>
          </div>
          <div className="mb-3">
            <label htmlFor="device" className="form-label">Type of device</label>
            <br></br>
            <select className="form2" value={device} onChange={(e) => {setDevice(e.target.value)}}>
              <option>Select a device</option>
              <option>Necklace</option>
              <option>Caravan</option>
            </select>
         </div>
          <div className="mb-3">
            <label htmlFor="numdevice" className="form-label">Device number</label>
             <br></br>
            <input type="text" className="form.control" value={numdevice} onChange={(e) => {setNumdevice(e.target.value)}}></input>
          </div>
          <button  onClick={addEstablishment} className="btn btn-success">Create</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default AddEstablishment;