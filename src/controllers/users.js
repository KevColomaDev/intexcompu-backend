import { users } from '../models/users.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

export const login = async (req, res) => {
  const { email, password } = req.body
  const user = await users.login({ email, password })

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const token = jwt.sign({ user }, process.env.JWT_SECRET)
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    partitioned: true
  })
  return res.json(user)
}

export const getUsers = async (req, res) => {
  const allUsers = await users.getUsers()
  return res.json(allUsers)
}
