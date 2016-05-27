angular.module('vpApp.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('PassesCtrl', function ($scope, $state, VaccinePassStorage) {
    $scope.passes = VaccinePassStorage.getAll();
    $scope.add = function (pass) {
        VaccinePassStorage.add(pass);
    };
    $scope.remove = function (pass) {
        VaccinePassStorage.remove(pass);
    };
    $scope.goToAddUserPage = function () {
        $state.go('tab.pass-add-user');
    }
    $scope.goToAddVaccinationPage = function (id) {
        $state.go('tab.pass-add-vaccination', { passId: id });
    }
})

.controller('PassAddUserCtrl', function ($scope, $state, $stateParams, VaccinePassStorage) {
    $scope.createPass = function (user) {
        VaccinePassStorage.add(user);
        $state.go('tab.passes');
    };
})

.controller('PassAddVaccinationCtrl', function ($scope, $stateParams, VaccinePassStorage) {
    $scope.pass = VaccinePassStorage.get($stateParams.passId);
    console.log($stateParams.passId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
