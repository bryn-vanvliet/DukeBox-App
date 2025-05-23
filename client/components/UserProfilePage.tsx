
import {useParams} from 'react-router-dom'
import { Box, Button, Flex} from '@chakra-ui/react'
import UserProfile from './UserProfile'

export default function UserHomePage() {
  const {id} = useParams<{ id: string}>()
  const userId = Number(id)



  return (
    <Flex 
    direction={['column', 'row']}
    justify="space-between"
    align="flex-start"
    px={[4, 8]}
    py={8}
    gap={[8, 4]}
    bg="#4fc3f7"
    minH="100vh"
    >
      <Box 
      flexBasis={['100%', '35%']}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={6}
      bg="white"
      p={6}
      borderRadius="xl"
      boxShadow="lg"
      position="relative"
      top="100px"
      >
        <UserProfile userId={userId} />
        
      </Box>
    </Flex>
  )
}