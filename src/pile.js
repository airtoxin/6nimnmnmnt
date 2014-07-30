var _ = require('lodash');

var Card = require('./card');

var Pile = (function() {
    var cards;

    function Pile(maxCardNumber) {
        cards = _.map(_.range(maxCardNumber), function (i) {
            return new Card(i + 1);
        });
    };

    Pile.prototype.draw = function () {
        if (cards.length <= 0) return null;
        var drawnCard = cards[0];
        cards = cards.slice(1);
        return drawnCard
    };

    Pile.prototype.shuffle = function () {
        _.shuffle(cards);
    };

    return Pile;
})();

module.exports = Pile;
