import ListEstablishment from "./ListEstablishment"
import AddEstablishment from './AddEstablishment';
import EditEstablishment from "./EditEstablishment"
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>Ganaderia Basto</h1>
       <ListEstablishment />
       <AddEstablishment />
       <EditEstablishment />
       
    </div>
  );
}

export default App;
