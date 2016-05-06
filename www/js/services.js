angular.module('ToSBuilder.services', [])

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
.factory('Jobs', function() {

  /**
   * Raw data
   *
   * Archer
   * Cleric
   * Swordsman
   * Wizard
   *
   * ---
   * A R2
   * Ranger
   * Quarrel Shooter
   *
   * A R3
   * Sapper
   * Hunter
   *
   * A R4
   * Wuguchi
   * Scout
   *
   * A R5
   * Rogue
   * Fletcher
   *
   * A R6
   * Falconer
   * Schwarzer Reiter
   *
   * A R7
   * Canoneer
   * Musketeer
   *
   * ---
   * C R2
   * Priest
   * Krivis
   *
   * C R3
   * Bokor
   * Dievdirby
   *
   * C R4
   * Sadhu
   * Paladin
   *
   * C R5
   * Monk
   * Pardoner
   * Chaplain *
   *
   * C R6
   * Oracle
   * Druid
   *
   * C R7
   * Plague Doctor
   * Kabalist
   *
   * ---
   * S R2
   * Highlander
   * Peltasta
   *
   * S R3
   * Barbarian
   * Hoplite
   *
   * S R4
   * Rodelero
   * Cataphract
   *
   * S R5
   * Squire
   * Corsair
   *
   * S R6
   * Doppelsoedner
   * Fencer
   *
   * S R7
   * Dragoon
   * Templar
   * Shinobi *
   *
   * ---
   * W R2
   * Cryomancer
   * Pyromancer
   *
   * W R3
   * Linker
   * Psichokino
   *
   * W R4
   * Thaumaturge
   * Elementalist
   *
   * W R5
   * Sorcerer
   * Chronomancer
   * Runecaster *
   *
   * W R6
   * Necromancer
   * Alchemist
   *
   * W R7
   * Warlock
   * Featherfoot
   *
   */

  var jobs =
  [
    {
      index: 1,
      name: 'Archer',
      rank: 1,
      circles: 3
    },
    {
      index: 2,
      name: 'Quarrel Shooter',
      rank: 2,
      circles: 3
    },
    {
      index: 3,
      name: 'Ranger',
      rank: 2,
      circles: 3
    },
    {
      index: 4,
      name: 'Hunter',
      rank: 3,
      circles: 3
    },
    {
      index: 5,
      name: 'Sapper',
      rank: 3,
      circles: 3
    },
    {
      index: 6,
      name: 'Scout',
      rank: 4,
      circles: 3,
    },
    {
      index: 7,
      name: 'Wuguchi',
      rank: 4,
      circles: 3
    },
    {
      index: 8,
      name: 'Fletcher',
      rank: 5,
      circles: 3
    },
    {
      index: 9,
      name: 'Rogue',
      rank: 5,
      circles: 3
    },
    {
      index: 10,
      name: 'Falconer',
      rank: 6,
      circles: 2
    },
    {
      index: 11,
      name: 'Schwarzer Reiter',
      rank: 6,
      circles: 2
    },
    {
      index: 12,
      name: 'Canoneer',
      rank: 7,
      circles: 1
    },
    {
      index: 13,
      name: 'Musketeer',
      rank: 7,
      circles: 1
    }
  ],
  [
    /**
     * Cleric
     */
  ],
  [
    /**
     * Swordsman
     */
  ],
  [
    /**
     * Wizard
     */
  ]
  ;

  return {
    all: function() {
      return jobs;
    },
    remove: function(job) {
      jobs.splice(jobs.indexOf(job), 1);
    },
    get: function(jobId) {
      for (var i = 0; i < jobs.length; i++) {
        if (jobs[i].id === parseInt(jobId)) {
          return jobs[i];
        }
      }
      return null;
    }
  };
})
;
