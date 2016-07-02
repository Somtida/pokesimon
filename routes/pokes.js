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

// This gets the 250 from DB and puts as array of objects
// allPokes[0].pokes[{poke1}, {poke2}, etc]

router.get('/game', (req, res) => {
  Poke.getFromDb((err, allPokes) => {
    if(err) res.status(400).send(err);
    res.send(allPokes);
  })
})


// This picks the random
// Needs to be fixed to work with db

router.get('/game/new', (req, res) => {
  Poke.getSixteen(allPokes)
  .then(selectedPokes => {
    res.send(selectedPokes);
  })
  .catch(err => {
    res.status(400).send(err);
  })
});

module.exports = router;