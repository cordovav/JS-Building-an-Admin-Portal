//configuration
require('dotenv').config()
const { application } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')

//using express json and cors
app.use(cors())
app.use(express.json())

//books
//reqire controller
const booksController = require('./controllers/book-controller.js')
app.use('/books', booksController)

//cors route
app.get('/books/:id', (req,res, next) => {
    res.json({message: 'This is CORS-enabled for all origins'})
})
//routes
app.get('/', (req,res) => {
    res.send('Hello World!!')
})

app.get('*', (req, res) => {
    res.status('404')
})

//listen
app.listen(PORT, () =>{
    console.log('listening on port', PORT);
})