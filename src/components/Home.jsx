import React, { useState, useEffect } from "react";
import { SearchBar, PokemonDisplay, Sidebar } from "./";


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
      <div className="flex-row">
      
      <Sidebar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div id="pokemonHolderHolder">
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
      
    </div>
    </div>
    </>
  );
};

export default Home;
