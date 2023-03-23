import {
    Modal,
    ModalOverlay,
    ModalContent,
    Text,
    Heading,
  } from '@chakra-ui/react'
import { isPokemonInMyPokedex } from '../../utils'

  export function ModalPokemon(props) {
    const { isOpen, onClose, pokemon, myPokedex } = props

    const checkPokemon = isPokemonInMyPokedex(pokemon.id, myPokedex)
    
    let pokemonNameCapitalize
    if(pokemon.name){
      const pokemonName = pokemon.name
      pokemonNameCapitalize = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
      }

    return ( 
        <Modal w={'28.18rem'} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
            <ModalContent w={'28.18rem'} minH={'13.87rem'} display={'flex'} 
            justifyContent={'center'} alignItems={'center'} onClick={onClose}>
    
               { !checkPokemon ? 
                <>
                <Heading variant={'modal'} fontSize={'48px'}> Gotcha! </Heading>                
                <Text display={'flex'} variant={'modal'} fontSize={'16px'}> 
                {`${pokemonNameCapitalize? pokemonNameCapitalize : 'The Pokemon'}`} has been added to your pokedex. 
                </Text>
                </>
                : 
                <>
                <Heading variant={'modal'} fontSize={'48px'}> Oh no! </Heading>                
                <Text display={'flex'} variant={'modal'} fontSize={'16px'}> 
                {`${pokemonNameCapitalize? pokemonNameCapitalize : 'The Pokemon'}`} has been removed from your pokedex. 
                </Text>
                </>
                }
            </ModalContent>
        </Modal>
    )
  }