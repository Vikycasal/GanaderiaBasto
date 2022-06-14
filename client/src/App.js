import ListEstablishment from "./ListEstablishment"
import AddEstablishment from './AddEstablishment';
import EditEstablishment from "./EditEstablishment"
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {FiLogOut} from "react-icons/fi"
import {BsBell} from "react-icons/bs"
import styles from "./styles/app.css"

//Once the components are finished, I start to build the routes, first I install react-router-dom

function App() {
  return (
  <div className="App">
     <nav className="navbar navbar-expand-lg bg-light">
       <div className="container-fluid">
         <a className="navbar-brand" href="#">Bastó</a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="addestablishment">Crate new establishment</a>
           </li>
         </ul>
         <div className="icons">
         <div className="bell"><BsBell /></div>
         <br />
         <div className="logout"><FiLogOut /></div>
         </div>
      </div>
    </div>
     </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListEstablishment />}/>
          <Route path="/addestablishment" element={<AddEstablishment />}/>
          <Route path="/editestablishment/:idestablishment" element={<EditEstablishment />}/>
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
