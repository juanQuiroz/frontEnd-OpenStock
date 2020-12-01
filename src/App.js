import "./App.css";
import "./assets/output.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DataProvider } from "./context/DataContext";
import ProductContextProvider from "./context/ProductContext";
import MovementContextProvider from './context/MovementContext'
import Productos from "./components/productos/Productos";
import Nosotros from "./components/nosotros/Nosotros";
import Movimientos from "./components/movimientos/Movimientos";
import Login from "./components/auth/Login";
import Kardex from "./components/kardex/Kardex";

function App() {
  return (
    <MovementContextProvider>
    <ProductContextProvider>

        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/kardex" component={Kardex} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/movimientos" component={Movimientos} />
          </Switch>
        </Router>

    </ProductContextProvider>
    </MovementContextProvider>
  );
}

export default App;
