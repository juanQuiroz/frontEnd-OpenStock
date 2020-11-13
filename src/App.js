import "./App.css";
import "./assets/output.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Productos from "./components/productos/Productos";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route extact path="/" component={Productos} />
      </Switch>
    </Router>
  );
}

export default App;
