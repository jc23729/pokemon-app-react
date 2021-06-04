import React, { useState } from 'react';
import PokemonList from "./PokemonList"

function App() {
  //first variable is our list of pokemon using on screen, current state, current data
  //method we can use to update our state
  // so basically it puts "bulbasaur", "charmander" into our pokemon variable on the left
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"])
  return (
    <PokemonList> pokemon={pokemon}</PokemonList>
  );
  
}

export default App;
