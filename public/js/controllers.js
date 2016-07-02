// 'use strict';


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
  },
  {
    id: 5,
    name: "bulbasaur",
    imgUrl: "http://pokeapi.co/media/img/1383571573.78.png",
    active: false
  },
  {
    id: 6,
    name: "bulbasaur",
    imgUrl: "http://pokeapi.co/media/img/1383571573.78.png",
    active: false
  },
  {
    id: 7,
    name: "bulbasaur",
    imgUrl: "http://pokeapi.co/media/img/1383571573.78.png",
    active: false
  },
  {
    id: 8,
    name: "bulbasaur",
    imgUrl: "http://pokeapi.co/media/img/1383571573.78.png",
    active: false
  }
  ]

  $scope.guessArr = [];
  $scope.playerArr = [];
  $scope.guess = (index) => {
    $scope.guessArr.push(index);

    if (index === $scope.playerArr[$scope.i] && $scope.guessArr.length === $scope.playerArr.length) {
      swal({
        title: "You won this level!",
        text: "One up.",
        type: "success",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Start Next Level',
        cancelButtonText: "Cancel!",
        closeOnConfirm: true,
        closeOnCancel: false
      },
      function(isConfirm){
        if (isConfirm){
          $scope.guessArr = [];
          $scope.correct = true;
          $scope.level++;
          $scope.i = 0;
          $scope.start();
        } else {
          swal("Aw, alright.", "Come back soon!");
        }
      });
    } else if (index === $scope.playerArr[$scope.i]) {
      console.log("Good job!");
      $scope.i++;
      $scope.correct = true;
    } else {
      swal({
        title: "Incorrect!",
        text: "Better luck next time.",
        type: "error",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Reset Game',
        cancelButtonText: "I Give Up",
        closeOnConfirm: true,
        closeOnCancel: false
      },
      function(isConfirm){
        if (isConfirm){
          $scope.guessArr = [];
          $scope.level = 1;
          $scope.i = 0;
          $scope.playerArr = [];
          $scope.correct = false;
          $scope.start();
        } else {
          swal("Aw, alright.", "Come back soon!");
        }
      });
    };
  console.log("index: ",index);
}

$scope.start = () => {
  $scope.i = 0;
  $scope.level = $scope.level || 1;

  function random() {
    return Math.floor(Math.random() * $scope.sprites.length);
  };

  if ($scope.correct) {
    $scope.playerArr.push(random());
  } else {
    $scope.playerArr = [random()];
  }

  $scope.activate = (element) => {
    element.active = true;
    console.log('element.active', element.active);
    $timeout(
      function() {
        element.active = false;
        console.log('element.active', element.active);
      }, 600);
    }

    $scope.count = 0;
    $scope.sequence = (count) => {
      $scope.disabled = true;
      $scope.activate($scope.sprites[$scope.playerArr[count]]);
      // console.log('$scope.count:', $scope.count);
      if (count < $scope.playerArr.length - 1) {
        $timeout(function() {
          $scope.sequence(count);
        }, 800);
      } else {
        $scope.disabled = false;
      }
      count++;
    }
    if ($scope.playerArr.length > 1) {
      $scope.activate($scope.sprites[$scope.playerArr[0]]);
      $timeout($scope.sequence($scope.count), 800);
    } else {
      $scope.sequence($scope.count);
    }

    console.log('$scope.playerArr:', $scope.playerArr);
    console.log('$scope.guessArr:', $scope.guessArr);
    console.log('$scope.i:', $scope.i);
    console.log('$scope.level:', $scope.level);
  }

})
