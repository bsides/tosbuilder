angular.module('ToSBuilder.services', [])

  .factory('Jobs', function ($log, $firebaseObject, CONFIG) {

    var jobsRef = new Firebase(CONFIG.FIREBASE_URL);
    // Returns with angularfire
    var jobsObject = $firebaseObject(jobsRef);

    return jobsObject;

    // return {
    //   all: function () {
    //     return jobsObject;
    //   },
    //   get: function (jobId) {
    //     for (var i = 0; i < jobs.length; i++) {
    //       if (jobs[i].id === parseInt(jobId)) {
    //         return jobs[i];
    //       }
    //     }
    //     return null;
    //   }
    // };
  })

  .factory('Utils', function () {
    return {
      range: function (n) {
        return new Array(n);
      }
    };
  })

  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
      }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
      }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
      }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
      }];

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  })
  ;
