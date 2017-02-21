ratingFormApp.service('RatingService', function($http, $q) {
  return {
    'getRatings': function() {
      var defer = $q.defer();
      $http.get('/ratingform').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    /*'addTodo': function(todo) {
      var defer = $q.defer();
      $http.post('/todo/addTodo', todo).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeTodo': function(todo) {
      var defer = $q.defer();
      $http.post('/todo/removeTodo', todo).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }*/
}});