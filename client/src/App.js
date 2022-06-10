import ListEstablishment from "./ListEstablishment"
import AddEstablishment from './AddEstablishment';
import EditEstablishment from "./EditEstablishment"
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

//Once the components are finished, I start to build the routes, first I install react-router-dom

function App() {
  return (
      <div className="App">
        <h1>Ganaderia Basto</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListEstablishment />}/>
          <Route path="/addestablishment" element={<AddEstablishment />}/>
          <Route path="/editestablishment" element={<EditEstablishment />}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
