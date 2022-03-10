const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Book = require('../models/Book');

router.get('/test', (req, res) => {
  res.send('deu certo');
});

router.get('/add', (req, res) => {
  res.render('add');
})

// add book via post
router.post('/add', (req, res) =>{

  let {title, author, user, is_new} = req.body;
  //insert

  Book.create({
    title,
    author,
    user,
    is_new
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));
})

module.exports = router