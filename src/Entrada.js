import React from "react";
import { Link } from "react-router-dom";
import "./Entrada.css";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";

const Entrada = () => {
  return (
    <body className="body">
      <div className="h-screen flex flex-col items-center justify-between">
        <section className="text-center">
          <h1 className="titulo font-bold py-2 px-4 pt-10 rounded text-3xl">
            Bem vindo ao Pokedex!
          </h1>
        </section>
        <div className=" pb-20">
          <button className=" btn text-white font-bold py-2 px-4 rounded">
            <Link to="/pokedex">Continuar</Link>
            <span className="btn-1"></span>
            <span className="btn-2"></span>
            <span className="btn-3"></span>
            <span className="btn-4"></span>
          </button>
        </div>
      </div>
    </body>
  );
};

export default Entrada;
