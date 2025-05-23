// import useUserData from '../hooks/useUserData'
import { Box, Text, Heading} from '@chakra-ui/react'

import useUserDataAuth from '../hooks/useUserDataAuth'



export default function UserProfile(){
  const { data: userData, isPending} = useUserDataAuth()

if (isPending) return <Text>Loading...</Text>
if (!userData) return <Text>No user found</Text>

return (
  <>
  <Box 
  width="330px"
  mx="auto"
  textAlign="center"
  display="flex"
  alignItems="center"
  justifyContent="center"
  height="100px">
    <Heading mb={0} fontSize="2xl" textAlign="center">
      {`Welcome, ${userData.name}`}</Heading></Box>
      
      <Box 
      width="300px"
      mx="auto"
      p={6}
      textAlign="center"
      transition="all 0.3s ease"
      _hover={{ transform: `scale(1.02)`}}>
      </Box></>
)
}
