import { useEffect, useState } from "react";
import { BASE_URL } from "../constants"
import axios from "axios";

export function useRequestData(path){

const [pokemons, setPokemons] = useState([]);
const [isLoading, setIsLoading] = useState(false)
const [pageLoaded, setLoaded] = useState(false)
const [error, setError] = useState(false)

useEffect(() => {
  setIsLoading(true)
  axios
    .get(`${BASE_URL}${path}`)
    .then((response) => {
        setPokemons(response.data.results); 
        setIsLoading(false)
    })
    .catch((error) => {
      setError(true)
    });
},[path]);

return {pokemons, isLoading, error}

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

