require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true},
    
    //to know if the connection was successful
    () => {console.log('connected to mongo: ', process.env.MONGO_URI) }
)

module.exports.Book = require('./book-model')