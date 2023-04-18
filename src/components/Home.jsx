import React, { useState, useEffect } from "react";
import { SearchBar, PokemonDisplay } from "./";

const Home = ({ setPokemonToDisplay, pokemonToDisplay, team, setTeam }) => {
  const [searchTerm, setSearchTerm] = useState();

  return (
    <>
      <h1>Welcome to your pokemon api playground</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setPokemonToDisplay={setPokemonToDisplay}
      />
      {pokemonToDisplay ? (
        <>
          <PokemonDisplay pokemonToDisplay={pokemonToDisplay} />
          <button
            onClick={() => {
              team.push(pokemonToDisplay);
              localStorage.setItem("team", JSON.stringify(team));
              console.log(team);
              console.log("Pokemon added");
            }}
          >
            Add to Team
          </button>
        </>
      ) : null}
    </>
  );
};

export default Home;
