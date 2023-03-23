import { ChakraProvider, Modal } from "@chakra-ui/react"
import { theme } from "./styles/theme"
import { Router } from "./routes/Router"
import { PokemonProvider } from "./Context"


function App() {

  return (
    <PokemonProvider>
      <ChakraProvider theme={theme}>
        <Router/>
      </ChakraProvider>
    </PokemonProvider>
    
  )
}



export default App
