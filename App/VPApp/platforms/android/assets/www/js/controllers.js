angular.module('vpApp.controllers', [])

.controller('DashCtrl', function ($scope) {
    $scope.outbreaks = [
        { name: "Lassa Fever", location: "Nigeria", reportedDate: "27-05-2016" },
        { name: "Lassa Fever", location: "Liberia", reportedDate: "18-05-2016" },
        { name: "Middle East respiratory syndrome coronavirus (MERS-CoV) ", location: "Saudia Arabia", reportedDate: "16-05-2016" },
    ];
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
    };
    $scope.goToViewUserPage = function (id) {
        $state.go('tab.pass-view-user', { passId: id });
    };
})

.controller('PassAddUserCtrl', function ($scope, $state, $stateParams, VaccinePassStorage) {
    var _uid = function () { return Math.floor((Math.random() * 1024) + 1) + new Date().getTime(); };
    $scope.createPass = function (user) {
        user.uid = _uid();
        user.vaccinations = [];
        VaccinePassStorage.add(user);
        $state.go('tab.passes');
    };
})

.controller('PassViewUserCtrl', function ($scope, $ionicPopup, $state, $stateParams, VaccinePassStorage) {
    $scope.pass = VaccinePassStorage.get($stateParams.passId);
    $scope.goToAddVaccinationPage = function (id) {
        $state.go('tab.pass-add-vaccine', { passId: id });
    };
    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'I\'m sorry!',
            template: 'That functionality isn\'t built yet. :( '
        });
    };
})

.controller('PassAddVaccineCtrl', function ($scope, $state, $stateParams, VaccinePassStorage, $filter) {
    $scope.vaccines = [
        { name: "Hepatitis A" },
        { name: "Hepatitis B" },
        { name: "Meningococcal" },
        { name: "Diptheria, Tetanus, Pertussis" },
        { name: "Human papillomavirus" },
        { name: "Zoster" },
        { name: "Influenza" },
        { name: "Haemophilus influenza type b" },
        { name: "Pneumococcal" },
        { name: "Polio" },
        { name: "Rotavirus" },
        { name: "Measles, Mumps, Rubella" },
        { name: "Varicella" },
        { name: "Other" }
    ];
    $scope.pass = VaccinePassStorage.get($stateParams.passId);
    $scope.save = function (vaccination, uid) {
        var _uid = function () { return Math.floor((Math.random() * 128) + 1) + new Date().getTime(); };
        vaccination.uid = _uid();
        VaccinePassStorage.addVaccination(vaccination, uid);
        $state.go('tab.pass-view-user', { passId: uid });
    };
})

.controller('InfoCtrl', function ($scope) {
    //
});
