import React from "react";
import PokemonDisplay from "./PokemonDisplay";

const Team = ({ team, setTeam }) => {
  return (
    <>
      <h1>Your Team</h1>
      <div className="flex-row">
        {team.map((pokemon, idx) => {
          return (
            <>
              <div>
                <PokemonDisplay pokemonToDisplay={pokemon} />
                <button
                  onClick={() => {
                    team.splice(idx, 1);
                    localStorage.setItem("team", JSON.stringify(team));
                    setTeam(JSON.parse(localStorage.getItem("team")));
                  }}
                >
                  Remove from Team
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Team;
