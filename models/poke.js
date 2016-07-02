'use strict';

const uuid = require('uuid');
const moment = require('moment');
const async = require('async');
const request = require('request')
var mongoose = require('mongoose');


// Store the 250 inside of database

var pokeSchema = new mongoose.Schema({
  pokes: {}
  
});

pokeSchema.statics.getAll = function() {
    // Use create 
    // Set up to request multiple api - ie load in SW, LotR, Marvel etc
  var obj 

  return Promise.all([
    requestAsync(`http://pokeapi.co/api/v1/sprite/?limit=250&offset=1`)
    ])
  function requestAsync(url) {
    return new Promise(function(resolve, reject) {
      request(url, function(err, res, body) {
        // console.log(JSON.parse(body))
        if (err) { return reject(err); }
        let data = JSON.parse(body);
        console.log(data.objects)
        let test = new Poke({
          pokes: data.objects
        })
        test.save((err, dbData) => {
          if (err) return cb(err);

        // console.log(Poke)
        // return resolve(JSON.parse(body));
        })
        return resolve(data.objects)
      });
    });

  }
}


pokeSchema.statics.getFromDb = function(cb) {

  Poke.find({}, (err, data) => {
    if(err) return cb(err)
    cb(null, data)
  })
}

// 
//Pluck 16 Pokes at random from DB
// Needs to be converted to work with the DB object created
// 

pokeSchema.getSixteen = (allPokes, cb) => {
  

  sixteenPokes = [];
  for (var i = 1; i <= 16; i++) {
    randomIndex = Math.floor(Math.random() * allPokes.length + 1)
    sixteenPokes.push(allPokes);
    allPokes.splice(randomIndex, 1);
  }
  return sixteenPokes
}
 

var Poke = mongoose.model('Poke', pokeSchema);

module.exports = Poke;


