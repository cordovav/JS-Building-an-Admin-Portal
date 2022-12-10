//dependencies
const express = require('express')

//configurations
require('dotenv').config()
const PORT = process.envPORT
const app = express()

//routes
app.get('/', (req,res) => {
    res.send('Hello World!!', PORT)
})

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})