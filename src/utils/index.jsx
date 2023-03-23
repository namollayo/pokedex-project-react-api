export function isPokemonInMyPokedex(pokemon, myPokedex) {
    const found = myPokedex.find((pokemonPokedex)=> pokemonPokedex.id == pokemon)
    return found? true : false 
}

export function addToMyPokedex(pokemon, myPokedex, setMyPokedex, onOpen, onClose){
    if(!isPokemonInMyPokedex(pokemon.id, myPokedex)){
        const addNewPokemon = [...myPokedex, pokemon]
        onOpen()
        setTimeout(() => setMyPokedex(addNewPokemon) && onClose(), 1500)
     
    } else { 
        alert("This pokemon is already in your Pokedex") 
    }
}

export function removeOfMyPokedex(pokemon, myPokedex, setMyPokedex, onOpen, onClose){
    onOpen() 
    const deletedPokemonPokedex = myPokedex.filter((deleted)=> deleted.id !== pokemon.id)
    setTimeout(() => setMyPokedex(deletedPokemonPokedex) &&  onClose(), 1500)

    updateLocalStorage(myPokedex)

}

export function accessMyPokedex( myPokedex, setMyPokedex ){
    const ArrayOfMyPokedexString = localStorage.getItem('myPokedex')
    const ArrayOfMyPokedex = JSON.parse(ArrayOfMyPokedexString)
    if(myPokedex && ArrayOfMyPokedex !== "") {
        setMyPokedex(ArrayOfMyPokedex)
    }
}
    
export function updateLocalStorage(myPokedex){
    const PokedexString = JSON.stringify(myPokedex)
    localStorage.setItem('myPokedex', PokedexString)
}

