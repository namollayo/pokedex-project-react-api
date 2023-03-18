import { createContext, useEffect, useState } from "react";
import { POKEMON_LIST_ENDPOINT } from "../constants";
import { useRequestData } from "../hooks";
import { accessMyPokedex } from "../utils";

export const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
    const [ myPokedex, setMyPokedex ] = useState([])
    const [ Pokedex, setPokedex ] = useState([])
    const { pokemons } = useRequestData(POKEMON_LIST_ENDPOINT)

    
    useEffect(()=>{
        setPokedex(pokemons)
    },[pokemons])

    useEffect(()=>{
        accessMyPokedex(myPokedex, setMyPokedex)
    },[])

    useEffect(() => {
        if(myPokedex.length > 0) {
          const myPokedexString = JSON.stringify(myPokedex)
          localStorage.setItem('myPokedex', myPokedexString)}
        }, [myPokedex]
      );

    
    return <PokemonContext.Provider 
    value={{
        myPokedex,
        setMyPokedex,
        Pokedex,
        setPokedex
    }}>
                {children}
            </PokemonContext.Provider>    
}