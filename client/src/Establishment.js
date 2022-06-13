import axios from "axios";
import React from "react";
import {Link} from "react-router-dom"


//I will create the list of establishments
function Establishment({establishment}){
   //Function to delete establishment
   function deleteestablishment(idestablishment){
    axios.post("/api/establishment/deleteestablishment", {idestablishment : idestablishment})
    .then(res =>{
        console.log(res.data)
        const dataestablishment = res.data[0]
        alert(res.data)
 
    }).catch(err => {
        console.log(err)
    })
   }


     return (
         <div className="conatiner">
             <div className="row">
                <div className="col-sm-6 offset-3">
               <ul className="list-group">
                   <li className="list-group-item">{establishment.idestablishment}</li>
                   <li className="list-group-item">{establishment.name}</li>
                   <li className="list-group-item">{establishment.kg}</li>
                   <li className="list-group-item">{establishment.paddock}</li>
                   <li className="list-group-item">{establishment.device}</li>
                   <li className="list-group-item">{establishment.numdevice}</li>
               </ul>
               <Link to={`/editestablishment/${establishment.idestablishment}`}><li className="btn btn-success">Editar</li></Link>
               <button className="btn btn-danger" onClick={()=>{deleteestablishment(establishment.idestablishment)}}>Borrar</button>
               <hr className="mt-4"></hr>
               </div>
             </div>
         </div>
     )
}

export default Establishment;