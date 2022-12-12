//require mongoose
const mongoose = require('monngose')
const { Schema } = mongoose

//schema
const bookSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})
const BooK = mongoose.model('Book', bookSchema)
module.exports = BooK
