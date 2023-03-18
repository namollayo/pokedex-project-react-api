import { ChakraProvider } from "@chakra-ui/react"
// import { PokemonContext } from "./Context"
import { theme } from "./styles/theme"
import { MyPokedexPage } from "./Pages/MyPokedexPage"
import { Router } from "./routes/Router"
import { PokemonProvider } from "./Context"
import { Header } from "./Components/Header"

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
