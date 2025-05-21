import { useAuth0 } from "@auth0/auth0-react"
import { Button, Text, HStack } from "@chakra-ui/react"

const AuthButtons = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  return (
    <HStack spacing={4}>
      {isAuthenticated ? (
        <>
          <Text>Welcome, {user?.name}</Text>
          <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </Button>
        </>
      ) : (
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
      )}
    </HStack>
  )
}

export default AuthButtons