import { useAuth0} from '@auth0/auth0-react'
import { useQuery, useMutation, useQueryClient, MutationFunction} from '@tanstack/react-query'
import request from 'superagent'
import { User, UserData} from '../../models/users'

export default function useUserDataAuth() {
  const { user, getAccessTokenSilently} = useAuth0()

  const query = useQuery({
    enabled: !!user,
    queryKey: ['active-user'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      const res = await request
      .get('/api/v1/users')
      .set('Authorization', `Bearer ${token}`)
      return res.body as User
    }
  })
  return {...query, add: useAddUser()}
}

interface NewUserData {
  newUser: UserData, 
  token: string
}

const addUser = async ({
  newUser, 
  token, 
}: NewUserData) => {
  return await request.post('api/v1/users')
  .set('Authorization', `Bearer ${token}`)
  .send(newUser)
  .then((res) => res.body.newUser)
}

function useAddUser() {
  return useUserMutation(addUser)
}

function useUserMutation<Tdata = unknown, Tvariables = unknown>(mutationFn: MutationFunction<Tdata, Tvariables>) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn, 
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['active-user']
      })
    }
  })
  return mutation
}