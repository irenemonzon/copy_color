import React from "react";
import Showcolors from "./components/Showcolors";
import { Link, Route } from "wouter";

function App() {
  return (
    <div>
      <h1> Colores</h1>
      <Route component={Showcolors} path="/:page" />
      <Link to="/1">pagina 1</Link>
      <Link to="/2">pagina 2</Link>
    </div>
  );
}

export default App;
