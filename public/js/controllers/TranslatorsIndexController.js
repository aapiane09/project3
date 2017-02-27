angular
  .module('project')
  .controller('TranslatorsIndexController', TranslatorsIndexController);

  IndexController.$inject = ['$http'];


  function TranslatorsIndexController ($http) {
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

  };
