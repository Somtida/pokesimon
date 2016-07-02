'use strict';

const express = require('express');
const router = express.Router();

const Poke = require('../models/poke');

// On start, this gets 250 poke from API and stores in db

router.get('/', (req, res) => {
  Poke.getAll()
  .then(allPokes => {

    res.send(allPokes);
  })
  .catch(err => {
    res.status(400).send(err);
  })
});

// This gets the 250 from DB, selects 16 at random, an returns in array of object format
// pokes[{poke1}, {poke2}, etc]


router.get('/game', (req, res) => {
  Poke.getSixteen((err, pokes) => {
    if(err) res.status(400).send(err);
    res.send(pokes)
  })
});

module.exports = router;