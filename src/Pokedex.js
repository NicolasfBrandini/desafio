import { useState } from "react";
import axios from "axios";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";

export default function Pokedex() {
  const [pesquisa, setPesquisa] = useState("");
  const [pokemon, setPokemom] = useState([]);
  const [erro, setErro] = useState(false);

  async function pesquisar() {
    try {
      setErro(false);
      const retorno = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + pesquisa
      );
      setPokemom(retorno.data);
    } catch (erro) {
      setErro(true);
    }
  }

  let card = "";
  if (pokemon.name) {
    card = (
      <div className="bg-gray-200 p-6 rounded-xl shadow-xl mt-4">
        <div className="text-center">Pokedex</div>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt="Imagem do pokemon"
          className="w-64 h-64 mx-auto mt-6 rounded-lg shadow-lg"
        ></img>
        <div className="mt-6">
          <h5 className="text-3xl font-bold mb-2">{pokemon.name}</h5>
          <p></p>
        </div>
        <ul className="mt-6 space-y-2">
          <li className="font-semibold">Peso: {pokemon.weight}</li>
          <li className="font-semibold">Altura: {pokemon.height}</li>
          <li className="font-serif text-red-500">Habilidades: </li>
          {pokemon.abilities.map((item, index) => {
            return <li className="font-semibold">{item.ability.name}</li>;
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="bg-red-500 min-h-screen">
      <div className="container mx-auto py-6 px-4">
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <div className="mb-4">
            <input
              onChange={(ev) => setPesquisa(ev.target.value)}
              type="text"
              placeholder="Nome ou ID do pokemon"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
            />
          </div>
          <button
            onClick={pesquisar}
            type="button"
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-semibold text-xl p-3 rounded-lg"
          >
            Pesquisar
          </button>
          {erro === true ? (
            <div className="mt-4 bg-red-200 text-red-700 p-4 rounded-lg">
              O pokemon não foi encontrado!
            </div>
          ) : (
            ""
          )}
          {card}
        </div>
      </div>
    </div>
  );
}
