'use strict';

angular.module('myApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {url: '/', templateUrl: '/html/home.html'})
    $urlRouterProvider.otherwise('/');
  })
// create a new filter -- titlecase filter
// everytime a value changes that uses this filter, this function will get triggered
// and it'll also trigger right away upon initial page load
  .filter('titlecase', function($scope) { // give it the standard dependency-injecting function
    // return the filter function
    return function(inputStr) {
      if(typeof inputStr !== 'string' || !inputStr.length) return;
      console.log('inputStr:', inputStr);

      // return the updated string
      return inputStr.toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
    }
  })
  .filter('total', function() { // potentially useful for updating totals; alternative to $scope.$watch
    return function(nums) { // given input array
      return nums.reduce((sum,num) => sum + num, 0); // get sum
    }
  })
