const express = require('express')
const server = express()

require('dotenv').config();

const PORT = process.env.PORT || 9000

server.listen(PORT, (req, res) => {
    console.log(`Server Runs On ${PORT}`)
    console.log(process.env.MESSAGE)
})

server.use('*', (req, res) => {
    res.send('<h1>Hello Hello</h1>')
})