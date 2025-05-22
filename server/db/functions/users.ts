import { User, UserData} from '../../../client/models/users.ts'
import db from './../connection.ts'

export const userKeys = [
  'users.id as id',
  'users.auth_id as authId',
  'users.name as name',
  'users.avatar_id as avatarId',
]

//CREATE 

export async function addNewUser(data: UserData) {
  const results = await db('users').insert({
    auth_id: data.authId,
    name: data.name, 
  })

  return results
}

// READ 

export async function getUserById(id: number) {
  try {
    const user = await db('users').where('id', id).select(userKeys)
    return user[0]
  } catch (error) {
    console.error(error)
  }
}

export async function getUserByAuthId(authId: string) {
    const user = await db('users').where('users.auth_id', authId).select(userKeys).first()
    return user as User
  } 
  
