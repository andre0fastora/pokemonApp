import React, { useState } from "react";
import { Navbar, Home } from "./";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const [pokemonToDisplay, setPokemonToDisplay] = useState("");

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
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Main;
