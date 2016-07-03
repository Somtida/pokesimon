// 'use strict';


angular.module('myApp')
.controller('mainCtrl', function($scope, Poke) {
  console.log('mainCtrl!');

  Poke.getSixteen()
  .then(res=>{
    console.log("res: ",res);
    $scope.sprites = res.data;
  })
  .catch(err=>{
    console.log("err: ",err);
  })

})
.controller('gameCtrl', function($scope, $timeout, $state) {
  console.log('gameCtrl!');

  $scope.level = $scope.level || 1;
  $scope.$watch(function() {
    return angular.toJson($scope.level);
  }, function() {
    $scope.message = `Current level: ${$scope.level}. Keep at it to catch 'em all.'`
  })
  $scope.guessArr = [];
  $scope.playerArr = [];
  $scope.guess = (index) => {
    if (!$scope.playerArr.length) { return swal("You haven't started!", "Click the pokeball to start", "warning")}
    console.log($scope.guessArr);
    $scope.guessArr.push(index);

    if (index === $scope.playerArr[$scope.i] && $scope.guessArr.length === $scope.playerArr.length) {
      $scope.guessArr = [];
      $scope.correct = true;
      $scope.level++;
      $scope.i = 0;
      $scope.start();
    } else if (index === $scope.playerArr[$scope.i]) {
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
        closeOnCancel: true
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
          $scope.guessArr = [];
          $scope.level = 1;
          $scope.i = 0;
          $scope.playerArr = [];
          $scope.correct = false;
          $state.go('home');
        }
      });
    };
  }

  $scope.start = () => {
    $scope.i = 0;

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
      $timeout(
        function() {
          element.active = false;
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
    }


  })
