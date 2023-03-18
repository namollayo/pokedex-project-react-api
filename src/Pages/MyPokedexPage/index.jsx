import { Box, Flex, Heading } from '@chakra-ui/react'
import { useContext } from 'react'
import { PokemonContext } from "../../Context"
import { PokemonCard } from '../../Components/PokemonCard';



export const MyPokedexPage = () => {

  const { myPokedex } = useContext(PokemonContext)
  console.log(myPokedex);

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
                   My Pokedex 
          </Heading>
          <Flex bg='none' justify={'center'} wrap='wrap' rowGap={'3.3rem'} columnGap={'1.25rem'}>
            {myPokedex.map((data)=> <PokemonCard key={data.pokemon.id} pokemonName={data.pokemon.name}/>)}
          </Flex>
      </Box>
    </>
  )}
  