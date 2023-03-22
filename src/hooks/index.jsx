import { useEffect, useState } from "react";
import { BASE_URL } from "../constants"
import axios from "axios";

export function useRequestData(path){

const [pokemons, setPokemons] = useState([]);
const [pokedexIsLoading, setPokedexIsLoading] = useState(false)
const [pokedexError, setPokedexError] = useState(false)

useEffect(() => {
  setPokedexIsLoading(true)
  axios
    .get(`${BASE_URL}${path}`)
    .then((response) => {
        setPokemons(response.data.results); 
        setPokedexIsLoading(false)
    })
    .catch((error) => {
      setPokedexError(true)
    });
},[path]);

return {pokemons, pokedexIsLoading, pokedexError}

}

export function useRequestPokemon(path){

const [pokemon, setPokemon] = useState([]);
const [isLoading, setIsLoading] = useState(false)
const [isPageLoaded, setIsPageLoaded] = useState(false)
const [error, setError] = useState(false)

useEffect(() => {
  setIsLoading(true)
  axios
    .get(`${BASE_URL}${path}`)
    .then((response) => {
        setPokemon(response.data); 
        setIsLoading(false)
        setIsPageLoaded(true)
    })
    .catch((error) => {
      setError(true)
    });
},[path]);

return { pokemon, isPageLoaded, isLoading, error }

}

