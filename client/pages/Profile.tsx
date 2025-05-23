import { useEffect, useState} from 'react'
import { Box, Button, Flex, Spinner, VStack} from '@chakra-ui/react'
import UserProfile from '../components/UserProfile'
import { 
  IfAuthenticated,
  IfNotAuthenticated
} from '../components/Authenticated'
import useUserDataAuth from '../hooks/useUserDataAuth'
import { useAuth0 } from '@auth0/auth0-react'

