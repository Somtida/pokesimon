'use strict';

angular.module('myApp')
  .controller('mainCtrl', function() {
    console.log('mainCtrl!');
  })
  .controller('gameCtrl', function($scope) {
    console.log('gameCtrl!');
    $scope.sprites = [{
      id: 1,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 2,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 3,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 4,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 5,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 6,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 7,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 8,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 9,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 10,
      name: "bulbasaur",
      imgUrl: "https://pokeapi.co/media/img/9.png "
    },
    {
      id: 11,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 12,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 13,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 14,
      name: "bulbasaur",
      imgUrl: "https://pokeapi.co/media/img/9.png "
    },
    {
      id: 15,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    },
    {
      id: 16,
      name: "bulbasaur",
      imgUrl: "http://pokeapi.co/media/img/1383571573.78.png"
    }];


    $scope.guess = (index) => {
      console.log("index: ",index);
      
    }

    function shuffle(array) {
      var i = 0, j = 0, temp = null;

      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      };
      return array;
    };

    $scope.shuffledSprites = shuffle($scope.sprites);

  })
