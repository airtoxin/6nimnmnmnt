var _ = require('lodash');

var Card = (function() {
    function Card(number) {
        this.number = number;
        this.penalty = (_.bind(function () {
            var penalty = 0;
            if (this.number % 11 === 0) penalty += 5;
            if (this.number % 10 === 5) penalty += 2;
            if (this.number % 10 === 0) penalty += 3;
            if (penalty === 0) penalty = 1;
            return penalty;
        }, this))();
    };

    return Card;
})();

module.exports = Card;
