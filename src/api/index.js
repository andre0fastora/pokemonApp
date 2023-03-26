import { PokemonClient } from "pokenode-ts";

export const getPokemon = async (name) => {
  const api = new PokemonClient();

  try {
    const data = await api.getPokemonByName(name);
    return data;
  } catch (error) {
    console.error(error);
  }
};
