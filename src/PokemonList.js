import React from "react"
import ReactDOM from "react-dom";
import App from "./App";

//so here we are destructring pokemon so its basicall props.pokemon
export default function PokemonList({ pokemon }) {
    return (
      //loop over the pokemon with map, every time you loop you have to have a key to your top level element
        <div>
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
    </div>
    )
}
