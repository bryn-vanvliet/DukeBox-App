import { useMutation, useQueryClient} from '@tanstack/react-query'
import request from 'superagent'
import { UserData} from '../../models/users.ts'


export default function useAddUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: UserData) => {
      await request.post('/api/v1/user').send(data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['user']})
    }
  })
}