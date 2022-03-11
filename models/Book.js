const Sequelize = require('sequelize');
const db = require('../db/connection');

const Book = db.define('book', {
  title: {
    type: Sequelize.STRING,
  },
  author: {
    type: Sequelize.STRING,
  },
  user: {
    type: Sequelize.STRING,
  },
  is_new: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Book