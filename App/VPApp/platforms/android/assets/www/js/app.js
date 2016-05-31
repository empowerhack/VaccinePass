

angular.module('vpApp', ['ionic','ngStorage', 'vpApp.controllers', 'vpApp.services'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function() {
      if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

    .state('tab.passes', {
        url: '/passes',
        views: {
            'tab-passes': {
                templateUrl: 'templates/tab-passes.html',
                controller: 'PassesCtrl'
            }
        }
    })
    .state('tab.pass-add-user', {
        url: '/passes/new/user',
        views: {
            'tab-passes': {
                templateUrl: 'templates/pass-add-user.html',
                controller: 'PassAddUserCtrl'
            }
        }
    })
    .state('tab.pass-view-user', {
        url: '/passes/:passId/view',
        views: {
            'tab-passes': {
                templateUrl: 'templates/pass-view-user.html',
                controller: 'PassViewUserCtrl'
            }
        }
    })
    .state('tab.pass-add-vaccine', {
        url: '/passes/:passId/vaccine/add',
        views: {
            'tab-passes': {
                templateUrl: 'templates/pass-add-vaccine.html',
                controller: 'PassAddVaccineCtrl'
            }
        }
    })

  .state('tab.info', {
    url: '/info',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-info.html',
        controller: 'InfoCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
