const express = require('express')
const books = express.Router()
const Books = require('../models/books.js')

//Index
books.get('/', (req, res) => {
    Books.find()
    .then(foundBooks => {
        res.json(foundBooks)
    })
})

// Books route
books.get('/books', (req, res) => {
    if (Books[req.params.arrayIndex]) {
        res.render('Show', {
            books:Books[req.params.arrayIndex]
        })
    } else {
        res.render('404')
    }
})

// Books ID route
books.get('/:id', (req, res) => {
    Books.findById(req.params.id)
    .populate('books')
    .then(foundBooks => {
        res.render('show', {
            books: foundBooks
        })
    })
    .catch(err => {
        res.send('404')
    })
})

module.exports = books