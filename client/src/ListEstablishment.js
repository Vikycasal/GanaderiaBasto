import React, { useEffect, useState } from "react";
import Establishment from "./Establishment"
import axios from "axios"
import styles from "./styles/listestablishment.css"


//Create list of establishments
function ListEstablishment(){

    const [dataestablishment, setDataestablishment] = useState([])
  
    const[cosas, setCosas] = useState(null)
    const[search, setSearch] = useState("")


     useEffect(() => {
         axios.get("/api/establishment/getestablishment")
         .then(res => {
             console.log(res.data)
             setDataestablishment(res.data)
         }).catch(err =>{
             console.log(err)
         })
     },[])  

    const handleChange=e=>{
        setSearch(e.target.value)
        console.log("Search: " +e.target.value)
        filter(e.target.value);
    }

   const filter = (termSearch) => {
       var result = cosas.filter((elemento)=>{
        if(elemento.name.toString().toLowerCase().includes(termSearch.toLowerCase())
        ){
          return elemento;
        }
      });
     
   }

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
          <div className="search">
              <input className="form-control" 
              value={search}
              placeholder="Name / Registry number"
              onChange={handleChange}>
              </input>
              <button className="btn btn-success">
                  Search
              </button>
          </div>
          <br />
          <p className="text3">List of establishments</p>
          {listestablishment}
      </div>
     )
}

export default ListEstablishment;