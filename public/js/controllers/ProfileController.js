angular
  .module('intrpretr')
  .controller('ProfileController', ProfileController);

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
};
