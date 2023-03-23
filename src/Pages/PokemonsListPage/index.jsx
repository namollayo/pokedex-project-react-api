import { Box, Flex, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { PokemonCard } from "../../Components/PokemonCard/"
import { PokemonContext } from "../../Context"


export const PokemonsListPage = () => {
  
  const { Pokedex, pokedexError } = useContext(PokemonContext)
 

  return (
    <>
      <Box bg={'primary'} 
        w='100%' 
        minH='100vh' 
        color={'second'}
        >
          <Heading py={'3.75rem'} 
                   p={'2.5rem'} 
                  fontSize={'48px'} 
                  fontWeight={'700'} 
                  fontFamily={`'Poppins', 'sans-serif'`}> 
                  Pokedex Index
          </Heading>
          <Flex bg='none' justify={'center'} wrap='wrap' rowGap={'3.3rem'} columnGap={'1.25rem'}>
            { pokedexError? <Text>Request Error. <br/> Please try again.</Text> 
            : Pokedex.map((pokemon)=> <PokemonCard key={pokemon.url} pokemonName={pokemon.name}/>)}
          </Flex>
          
      </Box>
    </>
  )
}

