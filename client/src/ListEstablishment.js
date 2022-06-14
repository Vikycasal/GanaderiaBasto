import React, { useEffect, useState } from "react";
import Establishment from "./Establishment"
import axios from "axios"
import styles from "./styles/listestablishment.css"


//Create list of establishments
function ListEstablishment(){

    const [dataestablishment, setDataestablishment] = useState([])

     useEffect(() => {
         axios.get("/api/establishment/getestablishment")
         .then(res => {
             console.log(res.data)
             setDataestablishment(res.data)
         }).catch(err =>{
             console.log(err)
         })
     },[])  

     //Map list of establishments
     const listestablishment = dataestablishment.map(establishment =>{
         return(
             <div>
             <Establishment establishment={establishment} />
             </div>
         )
     })

     return (
        <div className="initialtext">
        <div>
        <p className="text">Admin / Establishment</p>
          <h2 className="title">Livestock Establishment</h2>
        </div>
          <div className="text1">
           <button className="btn btn-success">
            <a className="nav-link" href="addestablishment">Create new establishment</a>
           </button>
          </div>
          <br />
          <br />
          <p className="text2">Name / Registry number</p>
          <br />
          <p className="text3">List of establishments</p>
          {listestablishment}
      </div>
     )
}

export default ListEstablishment;