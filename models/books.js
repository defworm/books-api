const mongoose = require('mongoose')
const {Schema} = mongoose

const booksSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    year: {type: Number},
    quantity: {type: Number},
    imageURL: {type: String},
})

const Books = mongoose.model("Books", booksSchema)
module.exports = Books