//Import packages/files
const express = require('express')
const cors = require('cors')

//Create server and port
const app = express()
const middleware = cors()
const port = process.env.PORT || 5000

const guess = Math.floor(Math.random() * 100)
app.use(middleware)

// app.get('/', (req, res) => res.redirect('/guess'))

app.get('/guess', (req, res) => {
    return res.json({guess})
})



//Start server
app.listen(port, () => console.log(`Example App listening on port ${port}`))