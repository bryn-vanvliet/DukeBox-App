import { Box, Flex, Text } from '@chakra-ui/react'

export default function Logo() {
  return (
    <Flex align="center" justify="center">
      <Box position="relative" display="inline-block">
        <Text
          className="DukeBox"
          position="absolute"
          top={['4rem', '3rem', '2rem', '1rem']}
          left="50%"
          transform="translateX(-50%)"
          fontFamily="Limelight"
          fontSize="50px"
          textAlign="center"
        >
          DukeBox
        </Text>
      </Box>
    </Flex>
  )
}
