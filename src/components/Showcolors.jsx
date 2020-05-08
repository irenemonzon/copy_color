import React, { useState, useEffect } from "react";
import Getcolors from "../services/Getcolors";
import "./Showcolors.css";
import Copycolor from "./Copycolor";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "react-bootstrap/Button";

const Showcolors = ({ params }) => {
  //pasa el parametro para cambiar  la pagina
  const { page } = params;
  //state de los colores
  const [colors, setColor] = useState([]);
  //state para copiar valor de color elegido
  const [copied, setcopied] = useState(false);
  const [value, setValue] = useState("");
  //llamado a la funcion de copiar,se cambia el state para mostrar modal copiado
  const Copy = color => {
    setcopied(true);
    setValue(color);
  };
  //si boton de copiado se activa, mostrar modal  de copiado por 2 s
  if (copied === true) {
    setTimeout(function() {
      setcopied(false);
    }, 2000);
  }
  //al iniciarse se hace llamado a la api, con el parametro de la pagina, y se pasan los valores al state para mostrarlos
  useEffect(() => {
    Getcolors({ page }).then(colors => setColor(colors));
  }, [page]);

  //muestra la información de los colores, y copia al portapapeles el color elegido
  return (
    <div className="container-color ">
      {copied ? (
        <div className="container-modal">
          <Copycolor value={value} />
        </div>
      ) : (
        <div className="container-color ">
          {colors.map(({ id, name, year, color, pantone_value }) => (
            <div className="info-color " key={id}>
              <div className="elements">
                <div className="color" style={{ backgroundColor: color }}>
                  <h3>{name}</h3>
                </div>
                <CopyToClipboard text={color} onCopy={() => Copy(color)}>
                  <Button variant="outline-primary" size="sm">
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
