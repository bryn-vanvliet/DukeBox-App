import request from 'superagent'
import { useQuery} from '@tanstack/react-query'

import { User} from '../../models/users.ts'


export default function useUserData(id: number | undefined) {
  const query = useQuery({
    queryKey: ['users', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/users/${id}`)
      return res.body as User
    }
  })

  return {...query}
}