import React from "react";
import { getPokemon } from "../api";

const SearchBar = ({ searchTerm, setSearchTerm, setPokemonToDisplay }) => {
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const data = await getPokemon(searchTerm);
          console.log(data);
          setPokemonToDisplay(data);
        }}
      >
        <label>Search</label>
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          type={"text"}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SearchBar;
