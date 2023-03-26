import React, { useEffect } from "react";

const PokemonDisplay = ({ pokemonToDisplay }) => {
  return (
    <>
      <h1>{pokemonToDisplay?.name}</h1>
      <img src={pokemonToDisplay?.sprites?.front_default}></img>
    </>
  );
};

export default PokemonDisplay;
