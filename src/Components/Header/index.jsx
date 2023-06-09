import { Box, Container, Flex, Image } from "@chakra-ui/react";
import Logo from '../../assets/logo.png'
import { ToAddOrRemoveButton, ToMyPokedexButton, ToAllPokemonButton } from "../Buttons";
import {  useLocation, useParams } from "react-router-dom";

export function Header() {
    
    let pokemonId
    const locate = useLocation()
    if (locate.pathname.includes('pokemon')){
    const searchPokemonId = locate.pathname.split('/')
    pokemonId = searchPokemonId[2]}
    
    

    return(
    
        <Box display="grid"
             alignItems={'center'}
             justifyItems={'center'}
             gridTemplateColumns={' 1fr 1fr 1fr'}
             gridTemplateRows={'1fr'} 
             gridAutoFlow="row" h='10rem' bg="second">
            {locate.pathname !== "/"? <ToAllPokemonButton gridColumn={'1/2'} /> : <></>}
                <Container gridColumn={'2/3'}>
                    <Image w={'19.18rem'} src={Logo}/>
                </Container>
            {locate.pathname !== "/mypokedex/" ?
                <>
                {locate.pathname === '/' ? <ToMyPokedexButton gridColumn={'3/4'}/> : <ToAddOrRemoveButton pokemonId={pokemonId} gridColumn={'3/4'}/>}
                </> : <></>
            }       
        </Box>
    )
}