import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router"


//Here I will do the function to edit establishment
function EditEstablishment(){
  
    const params = useParams()
    //Hooks
const [name, setName] = useState("");
const [kg, setKg] = useState("");
const [paddock, setPaddock] = useState("");
const [device, setDevice] = useState("");
const [numdevice, setNumdevice] = useState("");

useEffect(() => {
   axios.post("/api/establishment/getdataestablishment", {idestablishment : params.idestablishment})
   .then(res =>{
       console.log(res.data[0])
       const dataestablishment = res.data[0]
       setName(dataestablishment)
       setKg(dataestablishment)
       setPaddock(dataestablishment)
       setDevice(dataestablishment)
       setNumdevice(dataestablishment)

   })
},[])

//Edit function
function editEstablishment(){
   //New object so i can edit establishment
   const newestablishment ={
    name : name,
    kg : kg,
    paddock : paddock,
    device : device,
    numdevice : numdevice,
    idestablishment: params.idestablishment
   }
//hacer la peticion del cambio
   axios.post("/api/establishment/newestablishment", newestablishment)
   .then(res => {
     console.log(res.data)
     alert(res.data)
   })
   .then(err => {console.log(err)})
}



     return (
         <div>
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
          <button  onClick={editEstablishment} className="btn btn-success">Editar establecimiento</button>
        </div>
      </div>
    </div>
     )
}

export default EditEstablishment;