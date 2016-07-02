// 'use strict';

// angular.module('myApp')

var app = angular.module('myApp');

app.service('Poke', function($http) {

// Get 16 pokes produced by the models/routes

 this.getSixteen = () => {

   return $http.get('/api/pokes/game');


 }


});
