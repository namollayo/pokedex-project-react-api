import { getTypes } from '../../utils/ReturnPokemonType'
import { useRequestPokemon } from '../../hooks';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import PokeballWaterMark from '../../assets/pngwing2.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { goToPokemonDetail } from '../../routes/coordinator';
import { addToMyPokedex, RemoveOfMyPokedex } from '../../utils';
import { useContext } from 'react';
import { PokemonContext } from '../../Context';
import { LoadingAnimation } from '../Loading';



export const PokemonCard = ({pokemonName}) => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const { myPokedex, setMyPokedex } = useContext(PokemonContext)
  const { pokemon, isPageLoaded } = useRequestPokemon(pokemonName)

  return (
    !isPageLoaded? <LoadingAnimation/> :  
    <>
      <Box 
        bg={`pokemonCard.${pokemon.types[0]['type']['name']}.500`}
        borderRadius='0.75rem' 
        p={'25px 22px 13px 23px'}
        w='27.5rem' 
        h='13.125rem' 
        m={0}
        bgImage={PokeballWaterMark}
        bgPos={'right'}
        bgRepeat={'no-repeat'}
        pos={'relative'} 
        color='white'
        key={pokemon.id}>
        <Flex flexDirection={'column'}>
          <Text textStyle={'pokemon.id'} 
                fontFamily={`'Inter', 'sans-serif'`}>{`#${pokemon.id}`}</Text>
          <Text mt={'-4px'} 
                mb={'0.4rem'} 
                textStyle={'pokemon.name'} 
                fontFamily={`'Inter', 'sans-serif'`}>{pokemon.name}</Text>
          <Flex columnGap={"0.4rem"}> 
            {pokemon.types.map((types) => {
              return <Image key={pokemon.types.indexOf(types)} src={getTypes(types.type.name)}/>})}
          </Flex>
        </Flex>    
        <Flex w={'100%'}
              mt={'2.4rem'}
              justify={'space-between'}
              align={'center'}>
          <Button bg={'none'} 
                  p={'0'}
                  textDecoration={'underline'}
                  fontFamily={`'Poppins', 'sans-serif'`}
                  textTransform={'capitalize'}
                  fontWeight={'700'}
                  _hover={{background:'none',
                            color:'primary',
                            opacity:'30%'}}
                  _active={{opacity:'20%'}}
                  onClick={()=>goToPokemonDetail(navigate, pokemon.id)}>
                    Details
          </Button>
          { location.pathname === "/" ? 
          <Button onClick={()=>addToMyPokedex({pokemon}, myPokedex, setMyPokedex)}
                  bg={'second'} w={'9.12rem'} h={'2.37rem'} borderRadius={'0.5rem'}
                  color={'third'} fontFamily={`'Poppins', 'sans-serif'`}
                  textTransform={'capitalize'}
                  fontWeight={'400'}
                  _hover={{color:`pokemonCard.${pokemon.types[0]['type']['name']}.700`}}
                  _active={{background:'inehert',
                            color:`pokemonCard.${pokemon.types[0]['type']['name']}.500`}}>                
            Catch!
          </Button>
          :
          <Button onClick={()=>RemoveOfMyPokedex(pokemon.id, myPokedex, setMyPokedex)}
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
            Delete
          </Button>
          }
        </Flex>
        <Image w={'193px'} src={pokemon.sprites.other.home['front_default']} pos={'absolute'} top="-3.75rem" left="16.5rem" />
      </Box>
    </>
  )
};

