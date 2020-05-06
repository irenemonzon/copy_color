import React from "react";
import Showcolors from "./components/Showcolors";
import { Link, Route } from "wouter";
import "./App.css";
//import Copycolor from "./components/Copycolor";

function App() {
  return (
    <div className="container ">
      <div className="container-title">
        <h1> Colores</h1>
      </div>
      <div className="container-colors ">
        <Route component={Showcolors} path="/:page" />
      </div>
      <div className="container-button ">
        <Link to="/1">
          <button type="button">Atras</button>
        </Link>
        <Link to="/2">
          <button type="button">Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
