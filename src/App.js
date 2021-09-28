/*eslint-disable*/

import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import ProductDetail from "./components/ProductDetail";
import shoeData from "./data";

function App() {
  let [shoes, Setshoes] = useState(shoeData);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home shoes={shoes} />
        </Route>
        <Route path="/detail" exact>
          <Detail shoes={shoes} />
        </Route>
        <Route path="/detail/:index">
          <ProductDetail shoes={shoes} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
