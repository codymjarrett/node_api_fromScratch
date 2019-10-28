const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config({ path: './config/config.env' })
const dbConnection = require('./config/db')
const people = require('./routes/people')


dbConnection()


const app = express()


if (process.env.NODE_ENV = 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use('/api/v1/people', people)


const PORT = process.env.APP_PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${process.env.APP_PORT} in ${process.env.NODE_ENV} mode!`.cyan.bold)
})
