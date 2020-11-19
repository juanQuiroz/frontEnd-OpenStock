import "./App.css";
import "./assets/output.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {DataProvider} from './context/DataContext'
import Navbar from "./components/layouts/Navbar";
import Productos from "./components/productos/Productos";
import Nosotros from "./components/nosotros/Nosotros";
import Movimientos from "./components/movimientos/Movimientos";


function App() {
  return (
    <DataProvider>  
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Productos} />
      
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/nosotros" component={Nosotros} />
        <Route exact path="/movimientos" component={Movimientos} />
       
      </Switch>
    </Router>
    </DataProvider>
  );
}

export default App;
