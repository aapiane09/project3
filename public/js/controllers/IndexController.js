angular
  .module('project')
  .controller('IndexController', IndexController);

  IndexController.$inject = ['$routeParams', '$location', '$http', "$scope", "$window"];

  console.log('IndexController Sanity Check!');

  function IndexController ($routeParams, $location, $http, $scope, $window) {
    console.log('IndexController Function Sanity Check!');
  };

  IndexController();
