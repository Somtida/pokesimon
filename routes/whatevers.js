'use strict';

const express = require('express');
const Whatever = require('../models/whatever');

let router = express.Router();

// whatevers.js
// /api/whatevers

router.route('/')
  .get( (req, res) => {
    Whatever.find({}, (err, whatevers) => {
      res.status(err ? 400 : 200).send(err || whatevers);
    });
  })
  .post( (req, res) => {
    Whatever.create(req.body, (err, whatever) => {
      res.status(err ? 400 : 200).send(err || whatever);
    });
  })

router.route('/:id')
  .get( (req, res) => {
    Whatever.findById(req.params.id, (err, whatever) => {
      res.status(err ? 400 : 200).send(err || whatever);
    });
  })
  .put( (req, res) => {
    Whatever.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, whatever) => { // {new: true} -- send back the newly updated whatever
      res.status(err ? 400 : 200).send(err || whatever);
    });
  })
  .delete( (req, res) => {
    Whatever.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    });
  })

module.exports = router;
