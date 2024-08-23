import mysql from 'mysql2/promise'
import { config } from 'dotenv'
config()

export const pool = mysql.createPool({
  host: 'napo.ecuahosting.net',
  user: 'intexcom_kevinC',
  password: 'Encebollado0401.',
  database: 'intexcom_tienda',
  port: 3306
})
