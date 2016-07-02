'use strict';
const mongoose = require('mongoose');

let whateverSchema = new mongoose.Schema({

});

let Whatever = mongoose.model('Whatever', whateverSchema);

module.exports = Whatever;
