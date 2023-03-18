import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { BiChevronLeft } from "react-icons/bi"; 
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../Context";
import { goToMyPokedex, goToPokemonsList } from "../../routes/coordinator";


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
export function ToAddOrRemoveButton({pokemon}) {

    const { myPokedex } = useContext(PokemonContext)
    
    return(
        <>
            { myPokedex.f ? 
            <Button bg={'button.cancel'}
                    w={'14.125rem'}
                    h={'3.563rem'}
                    color={'second'}
                    fontFamily={`'Poppins', 'sans-serif'`}
                    fontSize={'16px'}
                    fontWeight={'400'}
            >
                Remove from My Pokedex
            </Button> :
            <Button bg={'button.cancel'}
                    w={'14.125rem'}
                    h={'3.563rem'}
                    color={'second'}
                    fontFamily={`'Poppins', 'sans-serif'`}
                    fontSize={'16px'}
                    fontWeight={'400'}
            >
                Remove from My Pokedex
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