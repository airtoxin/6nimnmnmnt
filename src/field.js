var _ = require('lodash');

var Row = require('./row');

var Field = (function() {
    var instance;
    var rows;

    function Field(setupCards) {
        if (instance) return instance;
        instance = this;

        rows = _.map(setupCards, function (card) {
            return new Row(card);
        });

        return instance;
    };

    Field.prototype.move = function() {
        // do something
    };

    return Field;
})();

module.exports = Field;
