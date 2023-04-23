require('dotenv').config()
import{ createClient, createCliient } from '@supabase/supabase-js'
const supabase = createClient("https://vbovnhdpfmenezuaxgvj.supabase.co", process.env.DB_PUBLIC_KEY );
const movies = require('express').Router()
const{ Op } = require('sequelize')
const db = require('../models')
const { Movie } = db

//get all movies
movies.get('/' , async (req, res) => {
    try {
        const foundMovies = await Movies.findAll({
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name: ""}%`}
            }
        })
        res.status(200).json(foundMovies)
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//show
movies.get(':/name', async (req, res) => {
    try{
        const foundMovie = await Movies.findOne({
            where: { name: req.params.name },
        })
    } catch (err) {
        console.log(err)
    }
})

//update
movies.put(':/id', async (req, res) => {
    try{
        const updatedMovies = await Movies.update(req.body, {
            where: {movie_id: req.params.id }
        })
        res.status(202).json(updatedMovies)
    } catch(err) {
        console.log(err)
    }
})

//create
movies.post('/', async (req,res) => {
    try{
        const newMovie = await Movies.create(req.body)
        res.status(201).json(newMovie)
    } catch (err){
        console.log(err)
    }
})

//delete
movies.delete(':/id', async (req,res) => {
    try {
        const deletedMovies = await Movies.destroy({
            where: { movie_id: req.params.id }
        })
    } catch (err) {
        console.log(err)
    }
})

//export
module.exports = movies