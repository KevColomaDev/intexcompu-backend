import { app } from './server.js'
import { config } from 'dotenv'

config()

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))
