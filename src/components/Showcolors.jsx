import React, { useState, useEffect } from "react";
import Getcolors from "../services/Getcolors";

const Showcolors = ({ params }) => {
  //pasa el parametro para cambiar  la pagina
  const { page } = params;
  //state de los colores
  const [colors, setColor] = useState([]);

  useEffect(() => {
    Getcolors({ page }).then(colors => setColor(colors));
  }, [page]);

  //muestra la información de los colores
  return (
    <div>
      {colors.map(({ id, name, year, color, pantone_value }) => (
        <div key={id}>
          <h3>{name}</h3>
          <p>{year}</p>
          <p>{color}</p>
          <p>{pantone_value}</p>
        </div>
      ))}
    </div>
  );
};
export default Showcolors;
