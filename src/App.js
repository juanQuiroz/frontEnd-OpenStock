import "./App.css";
import "./assets/output.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Productos from "./components/productos/Productos";
import Nosotros from "./components/nosotros/Nosotros";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Productos} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/nosotros" component={Nosotros} />
      </Switch>
    </Router>
  );
}

export default App;
