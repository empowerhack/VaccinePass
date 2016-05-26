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
    $scope.things = VaccinePassStorage.getAll();
    $scope.add = function (newThing) {
        VaccinePassStorage.add(newThing);
    };
    $scope.remove = function (thing) {
        VaccinePassStorage.remove(thing);
    };
    $scope.goToNewPage = function () {
        console.log('New');
        $state.go('tab.passes-add');
    }
})

.controller('PassesAddCtrl', function ($scope) {
    console.log('PassesAddCtrl Started');
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
