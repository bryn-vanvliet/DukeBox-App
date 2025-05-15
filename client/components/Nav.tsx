import { Box, Button, Flex, Icon, useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './Logo'

export default function Nav() {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  

  return (
    <nav>
      <Logo />
      <Box position="absolute" right={3} top={2} zIndex={10}>
        <Flex justify="flex-end" gap={6} marginTop={4}>
          <Icon
            as={HamburgerIcon}
            boxSize={10}
            color="gray"
            onClick={onOpen}
            cursor="pointer"
            marginRight={4}
          />
        </Flex>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bgColor="" paddingTop={12}>
            <DrawerCloseButton m={6} />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <Flex direction="column" gap={4}>
                <Button bgColor="Gray" onClick={() => navigate('/')}>
                  Home
                </Button>
                {/* Add playlist route too */}
                <Button bgColor="Pink" onClick={() => navigate('/Playlist') }>Playlist</Button>
              </Flex>
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </nav>
  )
}
