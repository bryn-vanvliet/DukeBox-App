import { Box, Heading } from '@chakra-ui/react'
import  Login from '../components/Login'

export default function LoginPage() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={20}>
      <Heading mb={6}>Login to DukeBox</Heading>
      <Login />
    </Box>
  )
}