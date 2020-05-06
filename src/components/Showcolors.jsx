import React, { useState, useEffect } from "react";
import Getcolors from "../services/Getcolors";
import "./Showcolors.css";
import Copycolor from "./Copycolor";
import { CopyToClipboard } from "react-copy-to-clipboard";
//import { Link } from "wouter";

const Showcolors = ({ params }) => {
  //pasa el parametro para cambiar  la pagina
  const { page } = params;
  //state de los colores
  const [colors, setColor] = useState([]);

  const [copied, setcopied] = useState(false);
  const [value, setValue] = useState();

  const Copy = color => {
    setcopied(true);
    setValue(color);
  };

  useEffect(() => {
    Getcolors({ page }).then(colors => setColor(colors));
  }, [page]);

  //muestra la información de los colores
  return (
    <div className="container-color ">
      {colors.map(({ id, name, year, color, pantone_value }) => (
        <div className="info-color " key={id}>
          <div className="elements">
            <p>{year}</p>
            <p style={{ backgroundColor: color }}>color</p>
            <p>{color}</p>
            <h3>{name}</h3>
            <CopyToClipboard text={color} onCopy={() => Copy(color)}>
              <button>{color}</button>
            </CopyToClipboard>
            <p>{pantone_value}</p>
          </div>
        </div>
      ))}
      {copied ? <Copycolor value={value} /> : null}
    </div>
  );
};
export default Showcolors;
