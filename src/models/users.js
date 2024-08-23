import { pool } from '../database.js'

export const users = {
  async getUsers () {
    const [rows] = await pool.query('SELECT * FROM customers')
    return rows
  }
}
