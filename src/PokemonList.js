import React from "react";
//so here we are destructring pokemon so its basicall props.pokemon
export default function PokemonList({ pokemon }) {
    return (
        //loop over the pokemon with map
        <div>
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}
