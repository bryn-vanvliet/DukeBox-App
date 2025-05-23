import { useEffect, useState} from 'react'
import { Box, Button, Flex, VStack} from '@chakra-ui/react'
import UserProfile from '../components/UserProfile'
import { 
  IfAuthenticated,
  IfNotAuthenticated
} from '../components/Authenticated'
import useUserDataAuth from '../hooks/useUserDataAuth'
import { useAuth0 } from '@auth0/auth0-react'

export default function UserHomePage() {
  const { data: userData, isPending, error} = useUserDataAuth()
  const { loginWithRedirect, isAuthenticated} = useAuth0()
  const [stopLoading, setStopLoading] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStopLoading(true)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [])

  const handleSignIn = () => {
    loginWithRedirect()
  }

  if (isPending && !stopLoading) {
    return (
      <Box height="100vh" backgroundColor="#B3D9E1">
        <Flex height="100%" align="center" justify="center">
          <VStack>
            <h2>Loading profile</h2>
          </VStack>
        </Flex>
      </Box>
    )
  }

  // --IfNotAuthenticated Path -- //
  if (!isAuthenticated && stopLoading) {
    return (
      <Box height="100vh" backgroundColor="#B3D9E1">
      <Flex height="100%" align="center" justify="center">
        <VStack>
          <Button onClick={handleSignIn}>Sign In</Button>
          <p>Sign in to see your data</p></VStack></Flex></Box>
    )
  }
  if (
    !userData || userData.id === undefined)
   {
    return (
      <Box height="100vh" backgroundColor="#B3D9E1">
        <Flex height="100%" align="center" justify="center">
          <VStack>
            <Button onClick={handleSignIn}>Sign In</Button>
          </VStack>
        </Flex>
      </Box>
    )
  }
  if (error) {
    return (
    <Box height="100vh" backgroundColor="#B3D9E1">
      <Flex height="100%" align="center" justify="center"></Flex>
      <VStack>
         <h2>Error: {error.message}</h2>
      </VStack>
      </Box>
      )
  }

  return ( 
    <Box minHeight="100vh" bg="#D7C2DB">
      <IfAuthenticated>
      <UserProfile />
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Button onClick={handleSignIn}>Add Todo</Button>
        <p>Sign in to see your data</p>
      </IfNotAuthenticated>
    </Box>

  )
}


