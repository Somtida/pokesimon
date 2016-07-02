'use strict';

angular.module('myApp')
.controller('mainCtrl', function() {
  console.log('mainCtrl!');
})
.controller('gameCtrl', function($scope, $timeout) {
  console.log('gameCtrl!');
  $scope.sprites = [{
    id: 1,
    name: "bulbasaur",
    imgUrl: "http://pokeapi.co/media/img/1383571573.78.png",
    active: false
  },
  {
    id: 2,
    name: "bulbasaur",
    imgUrl: "http://pokeapi.co/media/img/1383571573.78.png",
    active: false
  },
  {
    id: 3,
    name: "bulbasaur",
    imgUrl: "http://pokeapi.co/media/img/1383571573.78.png",
    active: false
  },
  {
    id: 4,
    name: "bulbasaur",
    imgUrl: "http://pokeapi.co/media/img/1383571573.78.png",
    active: false
  }]


  $scope.guess = (index) => {
    console.log("index: ",index);
  }

  $scope.start = () => {
    $scope.playerArr = [];
    function random() {
      return Math.floor(Math.random() * 4);
    };
    for (let iteration = 1; iteration < 5; iteration++) {
      $scope.playerArr.push(random());
    }
    $scope.activate = (element) => {
      element.active = true;
      $timeout(function() {element.active = false}, 600);
    }
    console.log('$scope.playerArr:', $scope.playerArr);

    let count = 0;
    $scope.sequence = (count) => {
      $scope.disabled = true;
      $scope.activate($scope.sprites[$scope.playerArr[count]]);
      if (count < $scope.playerArr.length - 1) {
        $timeout(function() {
          $scope.sequence(count);
        }, 600);
      } else {
        $scope.disabled = false;
      }
      count++;
    }
    $scope.sequence(count);

  }


})
