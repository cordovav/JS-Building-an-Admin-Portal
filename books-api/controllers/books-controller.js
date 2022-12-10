const router = require('express').Router()
const db = require('../models/books-schema')
const books = express.Router()
const Book = require('../models/books-schema')

router.get('/', (req, res) => {
    res.send('this is the index at /books')
})

app.use(bodyParser.json());

module.exports = books