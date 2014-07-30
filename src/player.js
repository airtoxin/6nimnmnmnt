var _ = require('lodash');

var Player = (function() {
    function Player(name) {
        this.name = name;
    };

    Player.prototype.move = function() {
        // do something
    };

    return Player;
})();

module.exports = Player;
