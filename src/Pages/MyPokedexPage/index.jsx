import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { PokemonContext } from "../../Context"
import { PokemonCard } from '../../Components/PokemonCard';



export const MyPokedexPage = () => {

  const { myPokedex } = useContext(PokemonContext)

  return (
    <> 
      {myPokedex.length ?
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
                    My Pokedex 
            </Heading>
            <Flex bg='none' justify={'center'} wrap='wrap' rowGap={'3.3rem'} columnGap={'1.25rem'}>
            {myPokedex.map((pokemon)=> <PokemonCard key={pokemon.id} pokemonName={pokemon.name}/>) }
            </Flex>
        </Box> : 
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
                    My Pokedex 
          </Heading>
          <Flex bg='none' justify={'center'} wrap='wrap' rowGap={'3.3rem'} columnGap={'1.25rem'}>
          <Text fontFamily={`'Inter", 'sans-serif`} fontSize={'24px'} fontWeight={'700'} textAlign={'center'}>Your Pokedex is empty. <br/> Let's go catch some pokemons!</Text>
          </Flex>
      </Box> 
    }
  </>
  )}
  