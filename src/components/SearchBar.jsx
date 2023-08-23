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
          setSearchTerm("");
        }}
      >
        <label>Search by name or ID</label>
        <input
        value = {searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value.toLowerCase());
          }}
          type={"text"}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SearchBar;
