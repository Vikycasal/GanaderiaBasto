import axios from "axios";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import styles from "./styles/establishment.css"
import {MdDeleteOutline} from "react-icons/md"
import {BiEdit} from "react-icons/bi"


//I will create the list of establishments
function Establishment({establishment}){

   const navigate = useNavigate()
 


   //Function to delete establishment
   function deleteestablishment(idestablishment){
    axios.post("/api/establishment/deleteestablishment", {idestablishment : idestablishment})
    .then(res =>{
        console.log(res.data)
        const dataestablishment = res.data[0]
        alert(res.data)
        navigate(0)
 
    }).catch(err => {
        console.log(err)
    })
   }


     return (
         <div className="conatiner">
             <div className="row">
<table className="table">
    <thead>
        <tr>
            <th>Id</th>
            <th>Type of animal</th>
            <th>Weight in kg</th>
            <th>Paddock</th>
            <th>Device</th>
            <th>Number Device</th>
            <th>Edit</th>
            <th>Delete</th>
            
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{establishment.idestablishment}</td>
            <td>{establishment.name}</td>
            <td>{establishment.kg}</td>
            <td>{establishment.paddock}</td>
            <td>{establishment.device}</td>
            <td>{establishment.numdevice}</td>
            <td><Link to={`/editestablishment/${establishment.idestablishment}`}><li className="btn btn-success"><BiEdit /></li></Link></td>
            <td><button className="btn btn-danger" onClick={()=>{deleteestablishment(establishment.idestablishment)}}><MdDeleteOutline /></button></td>
        </tr>
    </tbody>
</table>

             </div>
         </div>
     )
}

export default Establishment;