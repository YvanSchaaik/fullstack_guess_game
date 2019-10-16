//Import packages/files
const express = require('express')

//Create server and port
const app = express()
const port = process.env.PORT || 5000

const guess = Math.floor(Math.random() * 100)

app.get('/', (req, res) => res.redirect('/guess'))

app.get('/guess', (req, res) => {
    console.log('req', req.query)
    return res.json({data: guess})
})


//Start server
app.listen(port, () => console.log(`Example App listening on port ${port}`))