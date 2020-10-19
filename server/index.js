const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const timerRouter = require('./routes/timer')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('Connection to the database has been established!')
})

app.use('/timer', timerRouter)

app.listen(port, () => {
    console.log(`App currently accessible here: http://localhost:${port} and the url is: ${uri}`)
})