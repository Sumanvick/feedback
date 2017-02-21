var ratingFormApp = angular.module('ratingFormApp', ['ngRoute', 'ui.bootstrap']);
//config route
ratingFormApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/rating-page.html',
      controller: 'RatingCtrl'
    });
  }]);

//controllers block
ratingFormApp.controller('RatingCtrl', ['$scope', '$rootScope', 'RatingService', function($scope, $rootScope, RatingService) {
  $scope.formData = {};
  $scope.ratings = [];
  console.log("its called..");
  RatingService.getRatings().then(function(response) {
    $scope.ratings = response;
    console.log($scope.ratings);
  });
/*  $scope.addTodo = function() {
    TodoService.addTodo($scope.formData).then(function(response) {
      $scope.todos.push($scope.formData)
      $scope.formData = {};
    });
  }
  $scope.removeTodo = function(todo) {
    TodoService.removeTodo(todo).then(function(response) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1)
    });
  }*/
}]);