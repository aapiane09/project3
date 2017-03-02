angular
  .module('intrpretr')
  .controller('TranslatorsIndexController', TranslatorsIndexController);

  TranslatorsIndexController.$inject = ['$http', '$scope'];


  function TranslatorsIndexController ($http, $scope) {
    console.log('TranslatorsIndexController Function Sanity Check!');
    var vm = this;

    $http({
      method: 'GET',
      url: '/api/users'
    }).then(function successCallback(response) {
      console.log(response.data);
      vm.users = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });

    $scope.clearFilter = function() {
      console.log("xxx");
      $scope.query = {};
    };


  };
