// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
function extend(base) {
    var parts = Array.prototype.slice.call(arguments, 1);
    parts.forEach(function (p) {
        if (p && typeof (p) === 'object') {
            for (var k in p) {
                if (p.hasOwnProperty(k)) {
                    base[k] = p[k];
                }
            }
        }
    });
    return base;
}

angular.module('ToSBuilder', ['ionic', 'ToSBuilder.controllers', 'ToSBuilder.services', 'firebase'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
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

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      // .state('tab.dash', {
      //   url: '/dash',
      //   views: {
      //     'tab-dash': {
      //       templateUrl: 'templates/tab-dash.html',
      //       controller: 'DashCtrl'
      //     }
      //   }
      // })

      // .state('tab.chats', {
      //   url: '/chats',
      //   views: {
      //     'tab-chats': {
      //       templateUrl: 'templates/tab-chats.html',
      //       controller: 'ChatsCtrl'
      //     }
      //   }
      // })
      // .state('tab.chat-detail', {
      //   url: '/chats/:chatId',
      //   views: {
      //     'tab-chats': {
      //       templateUrl: 'templates/chat-detail.html',
      //       controller: 'ChatDetailCtrl'
      //     }
      //   }
      // })

      .state('tab.build', {
        url: '/build?rank',
        views: {
          'tab-build': {
            resolve: {
              // Jobs: "Jobs",
              // logStateParams: function ($stateParams) {
              //   console.log($stateParams);
              // }

              // jobData: function($firebaseObject, FBURL, $q) {
              //   var ref = new Firebase(FBURL + '/Jobs');
              //   var obj = $firebaseObject(ref);
              //   return obj.$loaded();
              // },
              userIsAuthorized: function(Users) {
                return Users.isAuthorized;
              },
              userAuthData: function(Users) {
                return Users.authData;
              },
              userPath: function(Users) {
                return Users.authPath;
              },
              jobData: function(Jobs) {
                return Jobs.all();
              }
            },
            templateUrl: 'templates/build.html',
            controller: 'BuildCtrl'
          }
        }
      })

      .state('tab.build-skills', {
        url: '/build/skills',
        views: {
          'tab-build': {
            resolve: {
              // Add here the services which will be used to the skills
              // Would be nice if the data would already come in the format
              // that is needed by this view, like filtered by rank and circle
            },
            templateUrl: 'templates/skills.html',
            controller: 'SkillsCtrl'
          }
        }
      })

      .state('tab.build-ranks', {
        url: '/build/ranks?rank&name&circle&initial&classes',
        views: {
          'tab-build': {
            resolve: {
              // Add here the services which will be used to the skills
              // Would be nice if the data would already come in the format
              // that is needed by this view, like filtered by rank and circle
            },
            templateUrl: 'templates/ranks.html',
            controller: 'RanksCtrl'
          }
        }
      })

    // .state('tab.account', {
    //   url: '/account',
    //   views: {
    //     'tab-account': {
    //       templateUrl: 'templates/tab-account.html',
    //       controller: 'AccountCtrl'
    //     }
    //   }
    // });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/build');

  })

  .constant('FBURL', 'https://tosbuilder.firebaseio.com')

  .filter('rank1', function() {
    return function(job) {
      var justRank1 = [];
      for (var i = 0; i < job.length; i++) {
        // for (var j = 0; j < job[i].length; j++) {
        // console.log(job[i][j]);
        if (job[i].rank === 1) {
          justRank1.push(job[i]);
        };
        // };
      };
      return justRank1;
    };
  })
  .filter('spaceless', function() {
    return function(input) {
      if (input) {
        return input.toLowerCase().replace(/\s+/g, '');
      };
    };
  })
  ;
