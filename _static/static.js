const express = require('express')
const path = require('path')
const http = require('http')

const app = express()

app.use(express.static(path.resolve(__dirname, 'assets')))
app.use((req, res) => {
    res.writeHead(404, {'Content-Type': "text/plain"})
    res.end("File not Found!")
})

http.createServer(app).listen(3000)
