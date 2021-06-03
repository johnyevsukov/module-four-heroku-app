require('dotenv').config()
const express = require('express')
const server = express()

console.log(process.env.USER) // env USER=gabriel
console.log(process.env.SHELL) // env SHELL=/bin/zhs

if (process.env.NODE_ENV === 'production') {
  console.log('this means this code is deployed')
}

const PORT = process.env.PORT || 5000

console.log('port is -> ', PORT)

server.get('/', (req, res) => {
    res.send(`<h2>go to /api</h2>`);
  });

server.get('/api', (req, res) => {
  res.json({ message: `hello there` })
})

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})