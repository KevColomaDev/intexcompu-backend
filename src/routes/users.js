import { getUsers } from '../controllers/users.js'
import { Router } from 'express'

export const router = Router()

router.get('/', getUsers)
