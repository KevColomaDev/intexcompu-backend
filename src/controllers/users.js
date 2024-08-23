import { users } from '../models/users.js'

export const getUsers = async (req, res) => {
  const allUsers = await users.getUsers()
  return res.json(allUsers)
}
