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
        res.json('Show', {
            books:Books[req.params.arrayIndex]
        })
    } else {
        res.json('404')
    }
})

// Books ID route SHOW
books.get('/books/:id', (req, res) => {
    Books.findById(req.params.id)
    .populate('books')
    .then(foundBooks => {
        res.json('show', {
            books: foundBooks
        })
    })
    .catch(err => {
        res.json('404')
    })
})

// CREATE
books.post('/books', (req, res) => {
    if(!req.body.image) {
        req.body.image = undefined 
    }
  
    Books.create(req.body)
    res.redirect('/books')
  })

 // EDIT
 books.get('/:id/edit', (req, res) => {
    Books.find()
      .then(foundBooks => {
          Books.findById(req.params.id)
            .then(foundBooks => {
              res.json('edit', {
                  bread: foundBooks, 
                  bakers: foundBooks 
              })
            })
      })
  })

  // DELETE
books.delete('/books/:id', (req, res) => {
    Books.findByIdAndDelete(req.params.id) 
      .then(deletedBooks => { 
        res.status("").redirect('/books')
      })
  })

   // UPDATE
   books.put('/books/:id', (req, res) => {
    // if(req.body.hasGluten === 'on'){
    //   req.body.hasGluten = true
    // } else {
    //   req.body.hasGluten = false
    // }
    Books.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
      .then(updatedBooks => {
        console.log(updatedBooks) 
        res.redirect(`/books/${req.params.id}`) 
      })
  })

  books.get('/:arrayIndex', (req, res) => {
    if (Books[req.params.arrayIndex]) {
      res.json('Show', {
        books:Books[req.params.arrayIndex]
      })
    } else {
      res.json('404')
    }
  })

module.exports = books

// books.get('/seed', (req, res) => {
//     Books.insertMany([{
//         "title": "The Shinobi Initiative",
//         "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
//         "year": 2014,
//         "quantity": 10,
//         "imageURL": "https://imgur.com/LEqsHy5.jpeg"
//       },
//       {
//         "title": "Tess the Wonder Dog",
//         "description": "The tale of a dog who gets super powers",
//         "year": 2007,
//         "quantity": 3,
//         "imageURL": "https://imgur.com/cEJmGKV.jpg"
//       },
//       {
//         "title": "The Annals of Arathrae",
//         "description": "This anthology tells the intertwined narratives of six fairy tales.",
//         "year": 2016,
//         "quantity": 8,
//         "imageURL": "https://imgur.com/VGyUtrr.jpeg"
//       },
//       {
//         "title": "Wâˆ€RP",
//         "description": "A time-space anomaly folds matter from different points in earth's history in on itself, jsoning six unlikely heroes on a race against time as worlds literally collide.",
//         "year": 2010,
//         "quantity": 4,
//         "imageURL": "https://imgur.com/qYLKtPH.jpeg"
//       }])
//         .then(res.status(200).json({
//             message: 'Seed successful'
//         }))
//         .catch(res.status(400).json({
//             message: 'Seed unsuccessful'
//         }))
// })