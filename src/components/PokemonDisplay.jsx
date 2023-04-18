import React, { useEffect } from "react";

const PokemonDisplay = ({ pokemonToDisplay }) => {
  return (
    <div id="pokemonHolder">
      <h1>{pokemonToDisplay?.name}</h1>
      <img src={pokemonToDisplay?.sprites?.front_default}></img>
      <div className="flex-row">
        {pokemonToDisplay?.types.map((type) => {
          return <p style={{ paddingLeft: "1vw" }}>{type.type.name}</p>;
        })}
      </div>
      <div>
        {pokemonToDisplay?.stats.map((stat) => {
          return (
            <p>
              {stat.stat.name}: {stat.base_stat}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonDisplay;
