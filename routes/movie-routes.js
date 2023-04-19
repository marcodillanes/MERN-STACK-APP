const express = require('express');
const router = express.Router();
const movie = require('../models/movie')


router.get("/",(req, res) => {
    // route should provide all the movies
    let movie;
    try {
        movie = await movie.find(); //movie.find will be Movie.find after the schema is set up!
    } catch (err) {
        console.log(err);
    }

    if (!movie) {
        return res.status(404).json({message:"no movies found."})
    }
    return res.status(200).json({movie})
});

module.exports = router;