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


// pokeSchema.statics.getFromDb = function(cb) {

//   Poke.find({}, (err, data) => {
//     if(err) return cb(err)
//     cb(null, data)
//   })
// }

// 
//Pluck 16 Pokes at random from DB
// Splices the pokemon selected to avoid repetitions, but each time a new game is called, it grabs the 250 again)

pokeSchema.statics.getSixteen = (cb) => {
  
  Poke.find({}, (err, data) => {
    var sixteenPokes = [];
    for(var i = 1; i <= 16; i++) {

      var randomIndex = Math.floor(Math.random() * data[0].pokes.length)
      sixteenPokes.push(data[0].pokes[randomIndex])
      data[0].pokes.splice(randomIndex, 1)

    }
    if(err) return cb(err)
      console.log(sixteenPokes.length)
      cb(null, sixteenPokes)
  })
 
}
 

var Poke = mongoose.model('Poke', pokeSchema);

module.exports = Poke;


