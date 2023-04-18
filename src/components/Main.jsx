import React, { useState, useEffect } from "react";
import { Navbar, Home, Team } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const [pokemonToDisplay, setPokemonToDisplay] = useState("");
  const [team, setTeam] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("team")) {
      setTeam(JSON.parse(localStorage.getItem("team")));
    }
  });

  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              pokemonToDisplay={pokemonToDisplay}
              setPokemonToDisplay={setPokemonToDisplay}
              team={team}
              setTeam={setTeam}
            />
          }
        />
        <Route path="/team" element={<Team team={team} setTeam={setTeam} />} />
      </Routes>
    </div>
  );
};

export default Main;
