import { pool } from '../database.js'

export const users = {
  async login ({ email, password }) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password])
    return rows
  },
  async getUsers () {
    const [rows] = await pool.query('SELECT * FROM customers')
    return rows
  }
}
