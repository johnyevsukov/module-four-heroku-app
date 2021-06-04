require('dotenv').config()
const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))

const PORT = process.env.PORT || 5000

console.log('port is -> ', PORT)

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  });

server.get('/api', (req, res) => {
  res.json({ message: `api up and running` })
})

server.use('*', (req, res) => {
  res.status(404).json({
    message: '404 not found'
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
