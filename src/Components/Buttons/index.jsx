import { Button, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { BiChevronLeft } from "react-icons/bi"; 
import { useLocation, useNavigate } from "react-router-dom";
import { PokemonContext } from "../../Context";
import { useRequestPokemon } from "../../hooks";
import { goToMyPokedex, goToPokemonsList } from "../../routes/coordinator";
import { addToMyPokedex, isPokemonInMyPokedex, removeOfMyPokedex } from "../../utils";
import { ModalPokemon } from "../Modal";


export function ToMyPokedexButton() {

    const navigate = useNavigate()

    return(
        <Button onClick={()=>goToMyPokedex(navigate)}
                bg={'button.blue'}
                w={'17.938rem'}
                h={'4.625rem'}
                color={'second'}
                fontFamily={`'Poppins', 'sans-serif'`}
                fontSize={'24px'}
                fontWeight={'700'}
        >
            Pokedex
        </Button>
    )    
}
export function ToAddOrRemoveButton({pokemonId}) {

    const { myPokedex, setMyPokedex } = useContext(PokemonContext)
    const checkPokemon = isPokemonInMyPokedex(pokemonId, myPokedex) 
    const { pokemon } = useRequestPokemon(pokemonId)
    const { isOpen, onOpen, onClose } = useDisclosure()
    


    return(
        <> 
            <ModalPokemon pokemon={pokemon} myPokedex={myPokedex} isOpen={isOpen} onClose={onClose}/>
            { !checkPokemon ? 
            <Button onClick={()=>addToMyPokedex(pokemon, myPokedex, setMyPokedex, onOpen, onClose)}
                    bg={'button.confirm'}
                    w={'14.125rem'}
                    h={'3.563rem'}
                    color={'second'}
                    fontFamily={`'Poppins', 'sans-serif'`}
                    fontSize={'16px'}
                    fontWeight={'400'}
                    _hover={{bg:'#5aa75a'}}
            >
                Add to My Pokedex
            </Button> :
            <Button onClick={()=>removeOfMyPokedex(pokemon, myPokedex, setMyPokedex, onOpen, onClose)}
                    bg={'button.cancel'}
                    w={'14.125rem'}
                    h={'3.563rem'}
                    color={'second'}
                    fontFamily={`'Poppins', 'sans-serif'`}
                    fontSize={'16px'}
                    fontWeight={'400'}
                    _hover={{bg:'#ec4848'}}
            >
                Remove from My Pokedex
            </Button> }
    </> )    
}
export function AddOrRemovePokemonCardButton({pokemon}) {

    const { myPokedex, setMyPokedex } = useContext(PokemonContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const location = useLocation();

    return(
        <> 
            <ModalPokemon pokemon={pokemon} myPokedex={myPokedex} isOpen={isOpen} onClose={onClose}/>
           { location.pathname === "/" ? 
            <Button onClick={()=>addToMyPokedex(pokemon, myPokedex, setMyPokedex, onOpen, onClose)}
                    bg={'second'} w={'9.12rem'} h={'2.37rem'} borderRadius={'0.5rem'}
                    color={'third'} fontFamily={`'Poppins', 'sans-serif'`}
                    textTransform={'capitalize'}
                    fontWeight={'400'}
                    _hover={{color:`pokemonCard.${pokemon.types[0]['type']['name']}.700`}}
                    _active={{background:'inehert',
                            color:`pokemonCard.${pokemon.types[0]['type']['name']}.500`}}>    
                Catch!
            </Button> :
            <Button onClick={()=>removeOfMyPokedex(pokemon, myPokedex, setMyPokedex, onOpen, onClose)}
            bg={'button.cancel'}
            w={'9.12rem'}
            h={'2.37rem'}
            borderRadius={'0.5rem'}
            color={'third'}
            fontFamily={`'Poppins', 'sans-serif'`}
            textTransform={'capitalize'}
            fontWeight={'400'}
            _hover={{color:`pokemonCard.${pokemon.types[0]['type']['name']}.700`}}
            _active={{background:'inehert',
                      color:`pokemonCard.${pokemon.types[0]['type']['name']}.500`}}>
                Remove
            </Button> }
    </> )    
}

export function ToAllPokemonButton() {

    const navigate = useNavigate()

    return(
        <Button onClick={()=>goToPokemonsList(navigate)}
                bg={'none'}
                textDecoration={'underline'}
                p={0}
                color={'third'}
                fontFamily={`'Poppins', 'sans-serif'`}
                fontSize={'24px'}
                fontWeight={'700'}
                _hover={{background:'none'}}>
            <BiChevronLeft/>
            To Pokemon Index
        </Button>
    )

}