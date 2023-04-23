const movies = require('express').Router()
const db = require('../models')
const { Movie } = db

//get all movies
movies.get('/' , async (req, res) => {
    try {
        const foundMovies = await Movie.findAll()
        res.status(200).json(foundMovies)
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = movies