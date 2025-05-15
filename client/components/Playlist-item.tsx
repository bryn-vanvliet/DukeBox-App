import { Flex, IconButton, Image, Text} from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa';

type PlaylistItemProps = {
  title: string
  duration: string
  albumCover: string
  previewURL: string
}

export const PlaylistItem = ({ title, duration, albumCover, previewURL }: PlaylistItemProps) => {
  const handlePlay = () => {
    const audio = new Audio(previewURL)
    audio.play()
  }
  return(
    <Flex 
    align="center"
    justify="space-between"
    p={3}
    borderBottom="1px solid"
    borderColor="gray.200"
    >
      <Flex align="center" gap={3}>
        <Image 
        boxSize="40px"
        borderRadius="md"
        src={albumCover}
        alt={'${title} album cover'}
        />
        <Text fontWeight="medium">{title}</Text>
        </Flex>
        <Text fontSize="sm" color="gray.500">{duration}</Text>
        <IconButton 
        aria-label="Play Preview"
        icon={<FaPlay />}
        size="sm"
        onClick={handlePlay}
        variant="ghost"
        />
        </Flex>
  )
}