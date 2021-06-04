import React, { useState } from 'react';

function App() {
  //first variable is our list of pokemon using on screen, current state, current data
  //method we can use to update our state
  // so basically it puts "bulbasaur", "charmander" into our pokemon variable on the left
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"]);
  return null;
}

export default App;
