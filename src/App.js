import "./App.css";
import "./assets/output.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DataProvider } from "./context/DataContext";
import ProductContextProvider from "./context/ProductContext";
import Productos from "./components/productos/Productos";
import Nosotros from "./components/nosotros/Nosotros";
import Movimientos from "./components/movimientos/Movimientos";
import Login from "./components/auth/Login";

function App() {
  return (
    <ProductContextProvider>
      <DataProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/movimientos" component={Movimientos} />
          </Switch>
        </Router>
      </DataProvider>
    </ProductContextProvider>
  );
}

export default App;
