import React from "react";
import Showcolors from "./components/Showcolors";
import { Link, Route } from "wouter";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="container ">
      <div className="container-title">
        <h1> Copy Color</h1>
      </div>
      <div className="container-colors ">
        <Route exact path="/" component={Showcolors} />
        <Route path="/:page" component={Showcolors} />
      </div>
      <div className="container-button ">
        <Link to="/1">
          <Button variant="primary" active>
            Pagina 1
          </Button>
        </Link>
        <Link to="/2">
          <Button variant="primary" active>
            Pagina 2
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default App;
