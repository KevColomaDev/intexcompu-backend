import { getUsers, login } from '../controllers/users.js'
import { Router } from 'express'
import { auth } from '../middlewares/auth.js'

export const router = Router()

router.post('/login', login)
router.get('/', auth, getUsers)
