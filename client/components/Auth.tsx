import { useAuth0} from "@auth0/auth0-react"
import { Button } from "@chakra-ui/react"

const AuthButtons = () => {
  const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0()

  return isAuthenticated ? (
    <>
    <p>Welcome, {user?.name}</p>
    <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin}})}>
      Log Out
    </Button>
    </>
  ) : (
    <Button onClick={() => loginWithRedirect()}>Log In</Button>
  )
}

export default AuthButtons