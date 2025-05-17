import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'

import { FaPlay, FaPause } from 'react-icons/fa'
import { useAudioPlayer } from '../hooks/useAudioPlayer'

type PlaylistItemProps = {
  title: string
  duration: string
  albumCover: string
  previewURL: string
  artist: string
  onRemove: () => void
  isActive: boolean
  onActivate: () => void
}

export const PlaylistItem = ({
  title,
  duration,
  albumCover,
  previewURL,
  artist,
  onRemove,
  isActive,
  onActivate,
}: PlaylistItemProps) => {
  const { isPlaying, togglePlay } = useAudioPlayer(previewURL)

  const handlePlayPause = () => {
    onActivate()
    togglePlay()
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
          <Text fontSize="sm" color="gray.500">
            {artist}
          </Text>
        </Box>
      </Flex>

      <Text fontSize="sm" color="gray.500">
        {duration}
      </Text>

      <Flex gap={2}>
        <IconButton
          icon={isActive && isPlaying ? <FaPause /> : <FaPlay />}
          onClick={handlePlayPause}
          aria-label="Play Preview"
          size="sm"
          variant="ghost"
        />
        <IconButton
          icon={<DeleteIcon />}
          onClick={onRemove}
          aria-label="Remove from Playlist"
          size="sm"
          variant="ghost"
          color="red.500"
        />
      </Flex>
    </Flex>
  )
}
