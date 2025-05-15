import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react'
import { FaPlay, FaTrash } from 'react-icons/fa'

type PlaylistItemProps = {
  title: string
  duration: string
  albumCover: string
  previewURL: string
  artist: string
  onRemove: () => void
}

export const PlaylistItem = ({
  title,
  duration,
  albumCover,
  previewURL,
  artist,
  onRemove,
}: PlaylistItemProps) => {
  const handlePlay = () => {
    const audio = new Audio(previewURL)
    audio.play()
  }

  return (
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
          alt={`${title} album cover`}
        />
        <Box>
          <Text fontWeight="medium">{title}</Text>
          <Text fontSize="sm" color="gray.500">{artist}</Text>
        </Box>
      </Flex>

      <Text fontSize="sm" color="gray.500">
        {duration}
      </Text>

      <Flex gap={2}>
        <IconButton
          aria-label="Play Preview"
          icon={<FaPlay />}
          size="sm"
          onClick={handlePlay}
          variant="ghost"
        />
        <IconButton
          aria-label="Remove from Playlist"
          icon={<FaTrash />}
          size="sm"
          onClick={onRemove}
          variant="ghost"
          color="red.500"
        />
      </Flex>
    </Flex>
  )
}