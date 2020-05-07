import React from "react";
import Showcolors from "./components/Showcolors";
import { Link, Route } from "wouter";
import "./App.css";
import { Button } from "@material-ui/core";

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
          <Button variant="contained" color="primary" size="large">
            Pagina 1
          </Button>
        </Link>
        <Link to="/2">
          <Button variant="contained" color="primary">
            Pagina 2
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default App;
