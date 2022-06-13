import React, { useEffect, useState } from "react";
import Establishment from "./Establishment"
import axios from "axios"


//I will create the list of establishments
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
         <div>
             <h2>Lista de establecimientos</h2>
              {listestablishment}
         </div>
     )
}

export default ListEstablishment;