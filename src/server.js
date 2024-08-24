import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { router } from './routes/users.js'

export const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to Intexcompu')
})

app.use('/users', router)
