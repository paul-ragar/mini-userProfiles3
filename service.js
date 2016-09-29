angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=2'
    }).then(function(response) {
      var parsedResponse = response.data.data;
      for (var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = 'Buster'
      }
      deferred.resolve(parsedResponse)
    })
    return deferred.promise;
  }
});
