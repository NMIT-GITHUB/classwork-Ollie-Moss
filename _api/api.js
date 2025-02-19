const express = require('express')
const http = require('http')

const app = express()

app.get('/random/:min/:max', (req, res) => {
    const min = parseInt(req.params.min)
    const max = parseInt(req.params.max)
    if (min > max || isNaN(min) || isNaN(max)) {
        res.statusCode = 400
        res.json({ error: 'Bad Request!' })
        return
    }
    const randomNumber = Math.floor(Math.random() * (max - min) + min)

    res.statusCode = 200
    res.json({ result: randomNumber })
})

app.listen(3000, () => {
    console.log("App listening on port: 3000")
})
