

import { Box, Flex} from '@chakra-ui/react'
import UserProfile from './UserProfile'

export default function UserHomePage() {


  return (
    <Flex 
    direction='column' 
    justify="center"
    align="center"
    py={12}

   
    minH="100vh"
    >
      <Box 
      bg="white"
      p={8}
      borderRadius="xl"
      boxShadow="lg"
      width="90%"
      maxW="500px"
      textAlign="center"
      >
        <UserProfile />
        
      </Box>
    </Flex>
  )
}