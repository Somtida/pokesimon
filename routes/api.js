'use strict';

const express = require('express');

let router = express.Router();

router.use('/whatevers', require('./whatevers'));
// add add'tl routers here

module.exports = router;
