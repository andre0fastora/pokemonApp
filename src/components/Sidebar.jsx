import React from "react";

const pokemonList = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran-f",
    "nidorina",
    "nidoqueen",
    "nidoran-m",
    "nidorino",
    "nidoking",
    




]

const Sidebar = ({searchTerm, setSearchTerm}) => {
    
    const filteredPokemonArray = pokemonList.filter((pokemon) => {
        return pokemon.includes(searchTerm);
    })
    
    
    return (

        <div>
        {filteredPokemonArray.map((pokemon) => {
            return  <p onClick={() => setSearchTerm(pokemon)}>{pokemon}</p>
        })}
        </div>

    )
     
}

export default Sidebar;