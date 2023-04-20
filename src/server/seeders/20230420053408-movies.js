'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Movies', [
      {
        title: "Avengers: Endgame",
        type: "movie",
        year: "2019",
        imdb_id: "tt4154796",
        poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

      },
      {
        title: "The Conjuring",
        type: "movie",
        year: "2013",
        imdb_id: "tt1457767",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
      },
      {
        title: "The Conjuring 2",
        type: "movie",
        year: "2016",
        imdb_id: "tt3065",
        poster: "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_SX300.jpg",
      },
      {
        title: "The Conjuring: The Devil Made Me Do It",
        type: "movie",
        year: "2021",
        imdb_id: "tt7069210",
        poster: "https://m.media-amazon.com/images/M/MV5BOWRkOTYzZTQtMzQwNi00NDYwLTk4NjUtN2FjYTI4Y2UzM2RjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      },
    ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('movies', null, {})

  }
};
