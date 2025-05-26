import { Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

export function UploadSong( {onUpload}: { onUpload: (song: SongData) => void}) {
  const [file, setFile] = useState<File | null>(null) 

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    setFile(e.target.files[0])
  }
}

const handleUpload = () => {
  if (file) return
  
  const audio = new Audio(URL.createObjectURL(file))
  audio.addEventListener('loadedmetadata', () => {
    const duration = audio.duration

    const songData = {
      id: Date.now()
      name: file.name.replace(/\.[^/.]+$/, ""), // removes extension
      artist: "Unknown Artist"
      duration: duration,
      fileUrl: URL.createObjectURL(file)
    }

    onUpload(songData)
  })
}

return (
  <VStack spacing={4}>
    <Input type="file" accept="audio/*" onChange={handleFileChange} />
    <Button onClick={handleUpload} isDisabled={!file}>
      Upload Song
    </Button>
  </VStack>
)
}

export interface SongData {
  id: number
  name: string
  artist: string
  duration: number
  fileUrl: string
}