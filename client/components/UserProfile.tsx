import useUserData from '../hooks/useUserData'
import { Box, Skeleton, Text, Heading} from '@chakra-ui/react'

import useUserDataAuth from '../hooks/useUserDataAuth'


interface UserProfileProps {
  userId: number | null | undefined

}

export default function UserProfile({ userId}: UserProfileProps){
  const { data: userData} = useUserDataAuth()
const { 
  data: user, 
  isPending: userIsPending, 
  error: userError,
} = useUserData(Number(userId))

if (userIsPending) {
  return <Skeleton height="300px" borderRadius="lg" />
}

if (userError) {
  return <Text color="red.500">Whoops! Error fetching user data</Text>
}
if (!user) return <Text>User not found</Text>

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
      {`User: ${user.name}`}</Heading></Box>
      
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
