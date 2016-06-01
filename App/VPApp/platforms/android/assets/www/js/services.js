angular.module('vpApp.services', [])

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
        for (var i = 0; i < $localStorage.passes.length; i++) {
            if ($localStorage.passes[i].uid === parseInt(id)) {
                return $localStorage.passes[i];
            }
        }
        return null;
    };

    var _remove = function (thing) {
        $localStorage.passes.splice($localStorage.passes.indexOf(thing), 1);
    };

    var _addVaccination = function (_vaccine, _uid) {
        for (var i = 0; i < $localStorage.passes.length; i++) {
            if ($localStorage.passes[i].uid === parseInt(_uid)) {
                $localStorage.passes[i].vaccinations.push(_vaccine);
            }
        }
        return null;
    };

    return {
        getAll: _getAll,
        get: _get,
        add: _add,
        remove: _remove,
        addVaccination: _addVaccination
    };
});