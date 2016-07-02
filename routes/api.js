'use strict';

const express = require('express');

let router = express.Router();

router.use('/pokes', require('./pokes'));
// add add'tl routers here

module.exports = router;
