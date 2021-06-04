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
    res.send('<h3>API available at /api</h3>');
  });

server.get('/api', (req, res) => {
  res.json({ message: `api` })
})

server.use('*', (req, res) => {
  res.status(404).json({
    message: 'not found'
  })
})

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    custom: 'something exploded in the app',
    message: err.message,
    stack: err.stack
  })
})

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
