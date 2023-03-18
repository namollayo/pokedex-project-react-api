import { Box, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


import { useRequestPokemon } from '../../hooks'


export const PokemonDetailPage = () => {
  const { id } = useParams()
  const  { pokemon }  = useRequestPokemon(id)
  console.log(pokemon);

  
  return (
    <>
      <Box bg={'primary'} 
          w='100%' 
          minH='100vh' 
          color={'second'}>
        <Heading mb={'2.188rem'} textStyle={'h1'}> Detail </Heading>
            {!pokemon ? <Text>There is no pokemon with this Id/Name</Text>: 
            <Box></Box>
            }
      </Box>
    </>
  )
  }
  