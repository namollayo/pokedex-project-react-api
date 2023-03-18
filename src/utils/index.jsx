export function isPokemonInMyPokedex(pokemon) {
    return true 
}

export function addToMyPokedex(pokemon, myPokedex, setMyPokedex){
    if(isPokemonInMyPokedex(pokemon)){
        const addNewPokemon = [...myPokedex, pokemon]
        setMyPokedex(addNewPokemon)
    } else { 
        alert() 
    }
    console.log(myPokedex);
}

export function RemoveOfMyPokedex(){

}

export function accessMyPokedex(myPokedex, setMyPokedex ){
    const ArrayOfMyPokedexString = localStorage.getItem('myPokedex')
    const ArrayOfMyPokedex = JSON.parse(ArrayOfMyPokedexString)
    if(myPokedex && ArrayOfMyPokedex !== null) {
        setMyPokedex(ArrayOfMyPokedex)
    }
}
    
