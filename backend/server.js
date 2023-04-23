//dependencies
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const path = require('path')
const cors = require('cors')

//config/middleware
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//controllers
const moviesController = require('./controllers/movies_controller')
app.use('/api/movies', moviesController)

//listen 
app.listen(4005, () => {
    console.log('Server is running on port 4005')
})

// show 

//update

//delete