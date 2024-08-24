import mysql from 'mysql2/promise'
import { config } from 'dotenv'
config()

const HOST = process.env.HOSTDB
const USER = process.env.USERNAMEDB
const PASSWORD = process.env.PASSWORDDB
const DATABASE = process.env.DATABASEDB
const PORT = process.env.PORTDB

console.log(HOST, USER, PASSWORD, DATABASE, PORT)

export const pool = mysql.createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  port: PORT
})
