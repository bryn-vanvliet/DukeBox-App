// import useUserData from '../hooks/useUserData'
import { Box, Text, Heading} from '@chakra-ui/react'

import useUserDataAuth from '../hooks/useUserDataAuth'



export default function UserProfile(){
  const { data: userData, isPending, error} = useUserDataAuth()

if (isPending) return <Text>Loading...</Text>
if (error) return <Text color="red.500">Error loading profile</Text>
if (!userData) return <Text>No user found</Text>

return (
  
  <Box>
    <Heading as="h2" size="lg">
      {`Welcome, ${userData.name}!`}
    </Heading>
    <Text fontSize="md" color="gray.600" mt={2}>
      This is your profile page
    </Text>
    </Box>
)
}
