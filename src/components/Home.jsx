import React, { useState, useEffect } from "react";
import { SearchBar, PokemonDisplay } from "./";

const Home = ({ setPokemonToDisplay, pokemonToDisplay }) => {
  const [searchTerm, setSearchTerm] = useState();

  return (
    <>
      <h1>Welcome to your pokemon api playground</h1>;
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setPokemonToDisplay={setPokemonToDisplay}
      />
      {pokemonToDisplay ? <PokemonDisplay /> : null}
    </>
  );
};

export default Home;
