export interface UserData {
  authId: string, 
  name: string,
}

export interface User extends UserData {
  id: number
}