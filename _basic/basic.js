const express = require('express')
const log = require('morgan')
const http = require('http')

const app = express()
const port = 3000

app.use((req, res, next) => {
    // request, response, next function
    const minute = new Date().getMinutes()
    if (minute % 2 === 0) {
        next()
    } else {
        res.statusCode = 403
        res.end('Not authorized!')
    }
})

app.use((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Authorized!')
})

http.createServer(app).listen(port)
