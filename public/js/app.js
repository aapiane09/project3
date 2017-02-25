console.log('App.js Sanity Check');

angular.module('project', ['ngRoute', 'satellizer'])
       .config(config);
      //  .controller('LoginController', LoginController),
      //  .controller('SignupController', SignupController),
      //  .controller('LogoutController', LogoutController),
      //  .controller('ProfileController', ProfileController),
      //  .controller('TranslatorsIndexController' TranslatorsIndexController),
      //  .service('Account', Account);


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
    .when('/translators', {
      controller: 'IndexController', //CHANGE TO TranslatorsIndexController
      templateUrl: '/templates/translatorstemplate',
      controllerAs: 'translatorsCtrl',
      // resolve: {
      //   loginRequired: loginRequired
      // }
    })
    .when('/signup', {
      controller: 'SignupController',
      templateUrl: '/templates/signuptemplate',
      controllerAs: 'signupCtrl',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .when('/login', {
      controller: 'LoginController',
      templateUrl: '/templates/logintemplate',
      controllerAs: 'loginCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .when('/logout', {
      controller: 'LogoutController',
      templateUrl: '/templates/logouttemplate',
      controllerAs: 'logoutCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .when('/profile', {
      controller: 'ProfileController',
      templateUrl: '/templates/profiletemplate',
      controllerAs: 'profileCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .otherwise({
      redirectTo: '/'
    })

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

    function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

    function loginRequired($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }

}

/////////////////
// CONTROLLERS //
/////////////////

MainController.$inject = ["Account"]; // minification protection
function MainController (Account) {
  var vm = this;

  vm.currentUser = function() {
   return Account.currentUser();
  }

}

// HomeController.$inject = ["$http"]; // minification protection
// function HomeController ($http) {
//   var vm = this;
//   vm.posts = [];
//   vm.new_post = {}; // form data
//
//   $http.get('/api/posts')
//     .then(function (response) {
//       vm.posts = response.data;
//     });
//
//   vm.createPost = function() {
//     $http.post('/api/posts', vm.new_post)
//       .then(function (response) {
//         vm.new_post = {};
//         vm.posts.push(response.data);
//       });
//   };
// }

LoginController.$inject = ["$location", "Account"]; // minification protection
function LoginController ($location, Account) {
  var vm = this;
  vm.new_user = {}; // form data

  vm.login = function() {
    Account
      .login(vm.new_user)
      .then(function(){
        vm.new_user = {}; // clear sign up form
        $location.path('/profile'); // redirect to '/profile'
      })
  };
}

SignupController.$inject = ["$location", "Account"]; // minification protection
function SignupController ($location, Account) {
  var vm = this;
  vm.new_user = {}; // form data

  vm.signup = function() {
    Account
      .signup(vm.new_user)
      .then(
        function (response) {
          vm.new_user = {}; // clear sign up form
          $location.path('/profile'); // redirect to '/profile'
        }
      );
  };
}

LogoutController.$inject = ["$location", "Account"]; // minification protection
function LogoutController ($location, Account) {
  Account
    .logout()
    .then(function () {
        $location.path('/login');
    });
}


ProfileController.$inject = ["$location", "Account"]; // minification protection
function ProfileController ($location, Account) {
  var vm = this;
  vm.new_profile = {}; // form data

  vm.updateProfile = function() {
    Account
      .updateProfile(vm.new_profile)
      .then(function () {
        vm.showEditForm = false;
      });
  };
}

//////////////
// Services //
//////////////

Account.$inject = ["$http", "$q", "$auth"]; // minification protection
function Account($http, $q, $auth) {
  var self = this;
  self.user = null;

  self.signup = signup;
  self.login = login;
  self.logout = logout;
  self.currentUser = currentUser;
  self.getProfile = getProfile;
  self.updateProfile = updateProfile;

  function signup(userData) {
    return (
      $auth
        .signup(userData) // signup (https://github.com/sahat/satellizer#authsignupuser-options)
        .then(
          function onSuccess(response) {
            $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
          },

          function onError(error) {
            console.error(error);
          }
        )
    );
  }

  function login(userData) {
    return (
      $auth
        .login(userData) // login (https://github.com/sahat/satellizer#authloginuser-options)
        .then(
          function onSuccess(response) {
            $auth.setToken(response.data.token); // set token (https://github.com/sahat/satellizer#authsettokentoken)
          },

          function onError(error) {
            console.error(error);
          }
        )
    );
  }

  function logout() {
    return (
      $auth
        .logout() // delete token (https://github.com/sahat/satellizer#authlogout)
        .then(function() {
          self.user = null;
        })
    );
  }

  function currentUser() {
    if ( self.user ) { return self.user; }
    if ( !$auth.isAuthenticated() ) { return null; }

    var deferred = $q.defer();
    getProfile().then(
      function onSuccess(response) {
        self.user = response.data;
        deferred.resolve(self.user);
      },

      function onError() {
        $auth.logout();
        self.user = null;
        deferred.reject();
      }
    )
    self.user = promise = deferred.promise;
    return promise;

  }

  function getProfile() {
    return $http.get('/api/me');
  }

  function updateProfile(profileData) {
    return (
      $http
        .put('/api/me', profileData)
        .then(
          function (response) {
            self.user = response.data;
          }
        )
    );
  }


}
