import express from 'express'
import { createPool } from 'mysql2/promise'

const app = express()

const pool = createPool({
  host: 'mysqldb',
  user: 'root',
  password: "pasPro13",
  port: 3306
})



app.get('/', (req, res)=> {
  res.send ('Super página mega pro')
})


app.get('/time', async (req, res)=> {
  const result = await pool.query('SELECT NOW()')
  res.json (result [0])
})

app.listen (3000)



