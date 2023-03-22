export function isPokemonInMyPokedex(pokemon, myPokedex) {
    return true
}

export function addToMyPokedex(pokemon, myPokedex, setMyPokedex){
    if(isPokemonInMyPokedex(pokemon, myPokedex)){
        const addNewPokemon = [...myPokedex, pokemon]
        setMyPokedex(addNewPokemon)
    } else { 
        alert("aaaaaaaa") 
    }
}

export function RemoveOfMyPokedex(pokemon, myPokedex, setPokedex){
    const deletedPokemonPokedex = myPokedex.filter((deleted)=> deleted.pokemon.id !== pokemon)
    setPokedex(deletedPokemonPokedex)
}

export function accessMyPokedex( myPokedex, setMyPokedex ){
    const ArrayOfMyPokedexString = localStorage.getItem('myPokedex')
    const ArrayOfMyPokedex = JSON.parse(ArrayOfMyPokedexString)
    if(myPokedex && ArrayOfMyPokedex !== null) {
        setMyPokedex(ArrayOfMyPokedex)
    }
}
    
