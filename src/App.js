import React, { useState } from "react";
import PokemonList from "./PokemonList";

function App() {
  const [pokemon, setPokemon] = useState([]);

  //were gonna make usestate dynamic using library api axios

  axios.get(" https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
    //this will be our actual results for the pokemon
    setPokemon(res.data.results.map((p) => p.name));
  });

  return <PokemonList pokemon={pokemon} />
}

export default App;
