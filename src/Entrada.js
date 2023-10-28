import React from "react";
import { Link } from "react-router-dom";
import "./Entrada.css";

const Entrada = () => {
  return (
    <body className="body">
      <div>
        <h1 className="titulo">
          Clique em continuar para ter acesso ao pokedex!
        </h1>
        <button variant="contained" color="primary" className="button button1">
          <Link to="/pokedex">Continuar</Link>
        </button>
      </div>
    </body>
  );
};

export default Entrada;
