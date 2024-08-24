import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

export const auth = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded.user
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Invalid token' })
  }
}
