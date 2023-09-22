require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const UserRouter = require('./routers/UserRouter')
const ListingRouter = require('./routers/ListingRouter')

// express app
const app = express()
app.use(cors())

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/user', UserRouter)
app.use('/api/listing', ListingRouter)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
    })
})
    .catch((error) => {
    console.log(error)
    })