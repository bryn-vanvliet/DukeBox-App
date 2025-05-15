import { useSavedTracks } from '../hooks/useSavedTracks'
import { Box, Image, Text, Spinner, VStack, Link, Button, Heading } from '@chakra-ui/react'
import { PlaylistItem } from './Playlist-item'
import { useEffect, useState} from 'react'


export function Playlist() {
  const { savedTracks, removeTrackFromSaved } = useSavedTracks()
  

   
      function formatDuration(seconds: number) {
        const min = Math.floor(seconds / 60)
        const sec = seconds % 60
        return `${min}:${sec.toString().padStart(2, '0')}`
      }

  


  return (
    <Box 
    minHeight="100vh"
    px={6}
    py={10}
    bgGradient="linear(to-b, beige 0%, #fefae0 100%"
    >
      <Heading size="lg" mb={6} textAlign="center">
        Your Saved Tracks, Yay!
      </Heading>
      {savedTracks.length === 0 ? (
        <Text align="center">No saved tracks yet. Go Jam and add some!</Text>
      ) : (
        <VStack spacing={0} align="stretch">
          {savedTracks.map((track) => (
            <PlaylistItem 
            key={track.id}
            title={track.title}
            artist={track.artist}
            duration={formatDuration(track.duration)}
            albumCover={track.album.cover_small}
            previewUrl={track.preview}
            onRemove={() => removeTrackFromSaved(track.id)}
            />
          ))}
        </VStack>
      )}
      </Box>)}
     
