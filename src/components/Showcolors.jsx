import React, { useState, useEffect } from "react";
import Getcolors from "../services/Getcolors";
import "./Showcolors.css";
import Copycolor from "./Copycolor";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "@material-ui/core";

const Showcolors = ({ params }) => {
  //pasa el parametro para cambiar  la pagina
  const { page } = params;
  //state de los colores
  const [colors, setColor] = useState([]);

  const [copied, setcopied] = useState(false);
  const [value, setValue] = useState("");

  const Copy = color => {
    setcopied(true);
    setValue(color);
  };
  if (copied === true) {
    setTimeout(function() {
      setcopied(false);
    }, 3000);
  }

  useEffect(() => {
    Getcolors({ page }).then(colors => setColor(colors));
  }, [page]);

  //muestra la información de los colores
  return (
    <div className="container-color ">
      {copied ? (
        <Copycolor value={value} />
      ) : (
        <div className="container-color ">
          {colors.map(({ id, name, year, color, pantone_value }) => (
            <div className="info-color " key={id}>
              <div className="elements">
                <div className="color" style={{ backgroundColor: color }}>
                  <h3>{name}</h3>
                </div>
                <CopyToClipboard text={color} onCopy={() => Copy(color)}>
                  <Button variant="outlined" color="primary">
                    {color}
                  </Button>
                </CopyToClipboard>
                <div className="fotter-infocolor">
                  <span>{year}</span>
                  <span>{pantone_value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Showcolors;
