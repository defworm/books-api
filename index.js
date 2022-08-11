// Import express
const express = require('express')

//Initialize application
const app = express()
const port = 3000

//Configure body-parser for JSON
app.use(express.json())

//Setting up a basic get route
app.get('/', (req, res) => {
    res.send('Hello World')
})

//Setting up express listener
app.listen(port, () => {
    console.log("listening at port", port);
})