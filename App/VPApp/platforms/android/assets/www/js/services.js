angular.module('vpApp.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Dover',
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

.factory('VaccinePassStorage', function ($localStorage) {
    $localStorage = $localStorage.$default({
        passes: []
    });

    var _getAll = function () {
        return $localStorage.passes;
    };

    var _add = function (thing) {
        $localStorage.passes.push(thing);
    };

    var _get = function (id) {
        return $localStorage.passes[id];
    };

    var _remove = function (thing) {
        $localStorage.passes.splice($localStorage.passes.indexOf(thing), 1);
    };

    return {
        getAll: _getAll,
        get: _get,
        add: _add,
        remove: _remove
    };
});
