import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../apis/songs.ts'
import { SongData } from '../../models/songs.ts'

export function useSongs() {
  return useQuery({ queryKey: ['songs'], queryFn: () => api.getSongs() })
}

export function useAddSong() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (song: SongData) => api.addSong(song),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
    },
  })
}
