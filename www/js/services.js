angular.module('ToSBuilder.services', [])

  .factory('Jobs', function($log, $firebaseObject, FBURL) {


    return {
      all: function() {
        var ref = new Firebase(FBURL + '/Jobs');
        var obj = $firebaseObject(ref);

        return obj.$loaded();
      },
      getByName: function(jobName) {
        // var result = [];
        var ref = new Firebase(FBURL + '/Jobs/' + jobName);
        var obj = $firebaseObject(ref);

        return obj.$loaded();
      },
      // getByRank: function(rankLevel) {
      //   var ref = new Firebase(FBURL + '/Jobs').startAt(rankLevel)
      // }
    };

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
  .factory('Users', function($log, $firebaseObject, FBURL) {

  })

  // .factory('User', function($firebaseAuth) {
  //   return function(user) {
  //     var ref = new Firebase(FBURL + '/User');
  //     return $firebaseAuth(ref + '/' + user);
  //   };
  // })

  .factory('Utils', function($log, Jobs) {
    return {
      range: function(n) {
        return new Array(n);
      },
      calculateCircle: function(selectedJob) {
        var circle,
          canSelect = false,
          isLastRank = false
          ;


        angular.forEach(Jobs.all, function(val, key) {
          if (selectedJob.job === val.name) {
            var circle = (selectedJob.circle * 1) + 1,
              databaseCircle = val.circles * 1;

            canSelect = circle < databaseCircle;
            isLastRank = circle === databaseCircle;
          }
        });
        // $log.log(canSelect);
        if (isLastRank) return false;
        if (canSelect) return circle;


        // if (parent === null) return 1;
        // if (parent.job === current.job) {
        //   circle = parent.circle + 1;
        // } else {
        //   circle = 1;
        // };
        // return circle;
      }
    };
  })

  .factory('Chats', function() {
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
      all: function() {
        return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(chatId) {
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
