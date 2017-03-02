angular
  .module('intrpretr')
  .controller('TranslatorsShowController', TranslatorsShowController);

  TranslatorsShowController.$inject = ['$http', '$scope', '$routeParams'];


  function TranslatorsShowController ($http, $scope, $routeParams) {
    console.log('TranslatorsShowController Function Sanity Check!');
    var vm = this;
    var translatorId = $routeParams.id;

    vm.getData = function(){
      $http({
        method: 'GET',
        url: '/api/users/' + translatorId
      }).then(function successCallback(response) {
        vm.user = response.data;
        console.log(response.data)
      }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
        $location.path('/');
      });
    }
    vm.getData();

  };
