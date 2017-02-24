console.log('App.js Sanity Check');

angular.module('project', ['ngRoute', 'satellizer'])
       .config(config);


  ////////////
  // ROUTES //
  ////////////


config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      controller:'IndexController',
      templateUrl:'/templates/indextemplate',
      controllerAs: 'indexCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

}
