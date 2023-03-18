import { Box, Heading  } from "@chakra-ui/react"

export const ErrorPage = () => {
    return (
      <Box 
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          bg={'primary'} 
          w='100%' 
          minH='100vh' 
          color={'second'}>
        <Heading textAlign={'center'} mb={'2.188rem'} fontSize={'86px'} textStyle={'h1'}> Error 404 <br/>
        Page not Found </Heading>
      </Box>
    )
  }
  