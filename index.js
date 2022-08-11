// Import express
const express = require('express')
const mongoose = require ('mongoose')

require('dotenv').config()

//Initialize application
const app = express()
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

//Configure body-parser for JSON
app.use(express.json())

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

//Require Books Controller
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

//Setting up a basic get route
app.get('/', (req, res) => {
    res.send('Hello World')
})

//Setting up express listener
app.listen(PORT, () => {
    console.log("listening at port", PORT);
})