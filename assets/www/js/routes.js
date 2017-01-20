angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('doremon.doraemon', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/doraemon.html',
        controller: 'doraemonCtrl'
      }
    }
  })

  .state('doremon.melody', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/melody.html',
        controller: 'melodyCtrl'
      }
    }
  })

  .state('doremon.champion',{
      url: '/champion',
      params: {cname:null},
      views: {
        'side-menu21': {
          templateUrl: 'templates/champion.html',
          controller: 'championCtrl'
        }
      }
  })

  .state('doremon', {
    url: '/side-menu21',
    templateUrl: 'templates/doremon.html',
    controller: 'doremonCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page4')

  

});