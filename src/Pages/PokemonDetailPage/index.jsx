import { Box, Flex, Heading, Image, Progress, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import PokeballWaterMark from '../../assets/pngwing2.png'
import { LoadingAnimation } from "../../Components/Loading"
import { useRequestPokemon } from '../../hooks'
import { getTypes } from "../../utils/ReturnPokemonType"


export const PokemonDetailPage = () => {
  const { id } = useParams()
  const  { pokemon, isPageLoaded, error }  = useRequestPokemon(id)

  return (
    <Box bg={'primary'} 
      minW='100vw' 
      w={'fit-content'}
      h={'fit-content'}
      minH='100vh' 
      color={'second'}    
      >
      <Heading py={'3.75rem'} 
                p={'2.5rem'} 
                fontSize={'48px'} 
                fontWeight={'700'} 
                fontFamily={`'Poppins', 'sans-serif'`}> 
                Detail
      </Heading>
      { error? <Text> There is no pokemon with this Id/Name </Text> :
      !isPageLoaded ? <LoadingAnimation/> : 
        <Flex justifyContent={'center'} p={'1.563rem'} alignItems={'center'}>

          <Box w={'86.821rem'} h={'41.43rem'} py={'1.5rem'} px={'2.75rem'} borderRadius={'2.368rem'}
          bg={`pokemonCard.${pokemon.types[0]['type']['name']}.500`} pos={'relative'}
          bgImage={PokeballWaterMark} bgPos={'right'} bgSize={'contain'} bgRepeat={'no-repeat'}>

        <Image src={pokemon.sprites.other.home['front_default']} w={'18rem'} pos={'absolute'} 
        bottom="32.8rem" left="69.31rem"/>

            <Flex flexDirection={'row'} justify={'flex-start'} alignItems={'flex-ennd'} w={'100%'} h={'100%'}>
              <Flex w={'22.5rem'} h={'100%'} flexDirection={"column"} justify="space-between">
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} 
                bg={'second'} w={'17.75rem'} h={'17.75rem'} borderRadius={'2.368rem'}>
                  <Image src={`${pokemon.sprites.versions['generation-v']['black-white']['animated']['front_default']}`}
                  w={'30%'}/>
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}
                bg={'second'} w={'17.75rem'} h={'17.75rem'} borderRadius={'2.368rem'}>
                  <Image src={`${pokemon.sprites.versions['generation-v']['black-white']['animated']['back_default']}`}
                  w={'30%'}/>
                </Box>
              </Flex>
              <Box w={'21.438rem'} h={'38.313rem'} marginRight={'4.25rem'} borderRadius={'0.75rem'} 
              bg={'second'} p={'1.125rem'} >
                <Heading pb={'1.125rem'} color={'third'} fontFamily={`'Inter', 'sans-serif'`} 
                fontWeight={'800'} fontSize={'24px'} lineHeight={"29px"}>
                  Base Stats
                </Heading>
              {pokemon.stats.map((stats)=>
                <Flex justify={'space-evenly'} borderY={'1px solid #f3f3f3'} flexDir={'row'} 
                fontWeight={'500'} fontFamily={`'Roboto', 'sans-serif`} key={stats.stat.url}>
                  <Text alignSelf={'center'} textAlign={'end'} w={'20%'} color={'rgb(115, 115, 116)'} fontSize={'14px'} 
                  textTransform={stats.stat.name === 'hp'? 'uppercase' : 'capitalize'}
                  >
                    {stats.stat['name'] === 'special-attack' 
                    ? 'sp. atk' : stats.stat['name'] === 'special-defense' 
                    ? 'sp. def' : stats.stat['name']}
                  </Text>
                  <Text w={'20%'} textAlign={'center'} color={'primary'}>
                    {stats['base_stat']}
                  </Text>                
                <Progress
                      display={"flex"}
                      alignSelf={"center"}
                      value={stats['base_stat']}
                      variant={stats['base_stat'] < 50 ? 'orange' : stats['base_stat'] < 90 ? 'yellow' : 'green'}
                      h={"10px"}
                      max={'175'}
                      w={"55%"}
                      bg={'transparent'}
                      borderRadius={"0.25rem"}
                />
                </Flex>)}
              </Box>
              <Flex flexDir={'column'} justifyContent={'space-between'}>
                <Flex flexDirection={'column'} >
                  <Text textStyle={'pokemon.id'} 
                    mb={'0.5rem'}
                    fontFamily={`'Inter', 'sans-serif'`}>{`#${pokemon.id}`}
                  </Text>
                  <Text 
                  textStyle={'pokemon.name'} fontSize={'48px'} fontFamily={`'Inter', 'sans-serif'`}
                  mb={'1rem'}>
                    {pokemon.name}
                  </Text>
                  <Flex columnGap={"0.4rem"}> 
                  {pokemon.types.map((types) => {
                  return <Image key={pokemon.types.indexOf(types)} src={getTypes(types.type.name)}/>})}
                  </Flex>
                </Flex> 
                <Box w={'18.25rem'} h={'28.313rem'} borderRadius={'0.5rem'} bg={'second'} p={'1.125rem'} >
                  <Heading pb={'1.125rem'} color={'third'} fontFamily={`'Inter', 'sans-serif'`} 
                  fontWeight={'800'} fontSize={'24px'} lineHeight={"29px"}>
                      Moves
                  </Heading>
                  {pokemon.moves.slice(0,5).map((atk)=> <Text key={atk.move.name} variant={'moves'}> {atk.move.name} </Text>)} 
                </Box>
              </Flex>
            </Flex>  
          </Box>
        </Flex>
      }
    </Box>
  )
}
  