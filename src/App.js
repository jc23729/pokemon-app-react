import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
//So we want to wrap useEffect around the request
  useEffect(() => {
      axios.get(" https://pokeapi.co/api/v2/pokemon").then((res) => {
        //this will be our actual results for the pokemon
        setPokemon(res.data.results.map((p) => p.name));
      }, []);

  //were gonna make usestate dynamic using library api axios

  });

  return <PokemonList pokemon={pokemon} />;
}

export default App;
