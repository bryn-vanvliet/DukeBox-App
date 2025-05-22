import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import { Button, Box, Heading, Text} from '@chakra-ui/react'

const LoginPage: React.FC = () => {
  const { loginWithRedirect} = useAuth0()



  return (
    <Box textAlign="center" mt="20">
    <Heading size="xl" mb="4">Welcome to DukeBox</Heading>
    <Text mb="8">Please log in to access your setlists</Text>
    <Button colorScheme="blue" onClick={() => loginWithRedirect()}>
      Log In
    </Button>
    </Box>)
}

export default LoginPage