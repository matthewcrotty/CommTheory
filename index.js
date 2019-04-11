const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    res.sendFile('index.html')
  })

const server = app.listen(port, () => {
    const serverHost = "localhost"
    const serverPort = server.address().port
  
    console.log(`Example app listening at http://${serverHost}:${serverPort}`)
  })