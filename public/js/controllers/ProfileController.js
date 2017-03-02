angular
  .module('intrpretr')
  .controller('ProfileController', ProfileController);

ProfileController.$inject = ["$location", "Account", "$http", "$window"]; // minification protection

function ProfileController ($location, Account, $http, $window) {
  var vm = this;
  vm.new_profile = {}; // form data

  vm.updateProfile = function() {
    Account
      .updateProfile(vm.new_profile)
      .then(function () {
        vm.showEditForm = false;
      });
  };

  // vm.deleteProfile = function(user) {
  //   console.log("Controller delete profile hit!")
  //   $http({
  //     method: 'DELETE',
  //     url: '/api/me'
  //   }).then(function successCallback() {
  //     console.log("Callback hit!")
  //     $window.location.href = '/logout';
  //   }, function errorCallback(response) {
  //     console.log('There was an error deleting the data', response);
  //   });
  // }
};
