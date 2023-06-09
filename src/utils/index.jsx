export function isPokemonInMyPokedex(pokemon, myPokedex) {
    let found
    if (myPokedex !== null){
        found = myPokedex.find((pokemonPokedex)=> pokemonPokedex.id == pokemon) 
    } else {
        found = false 
    }
    return found? true : false 
}

export function addToMyPokedex(pokemon, myPokedex, setMyPokedex, onOpen, onClose){
    if(!isPokemonInMyPokedex(pokemon.id, myPokedex) && myPokedex !== null){
        const addNewPokemon = [...myPokedex, pokemon]
        onOpen()
        setTimeout(() => onClose(), 1400)
        setTimeout(() => setMyPokedex(addNewPokemon), 1500)
     
    } else { 
        alert("This pokemon is already in your Pokedex") 
    }
}

export function removeOfMyPokedex(pokemon, myPokedex, setMyPokedex, onOpen, onClose){
    onOpen() 
    const deletedPokemonPokedex = myPokedex.filter((deleted)=> deleted.id !== pokemon.id)
    setTimeout(() => onClose(), 1400)
    setTimeout(() => setMyPokedex(deletedPokemonPokedex), 1500)

    updateLocalStorage(myPokedex)

}

export function accessMyPokedex( myPokedex, setMyPokedex ){
    const ArrayOfMyPokedexString = localStorage.getItem('myPokedex')
    const ArrayOfMyPokedex = JSON.parse(ArrayOfMyPokedexString)
    if(myPokedex && ArrayOfMyPokedex !== null ) {
        setMyPokedex(ArrayOfMyPokedex)
    }
}
    
export function updateLocalStorage(myPokedex){
    const PokedexString = JSON.stringify(myPokedex)
    localStorage.setItem('myPokedex', PokedexString)
}

