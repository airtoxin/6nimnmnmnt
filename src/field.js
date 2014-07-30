var _ = require('lodash');

var Row = require('./row');

var Field = (function() {
    var instance;
    var rows = [];

    function Field(setupCards) {
        if (instance) return instance;
        instance = this;

        _.each(setupCards, function (card) {
        	rows.push(new Row(card));
        });

        return instance;
    };

    Field.prototype.move = function() {
        // do something
    };

    return Field;
})();

module.exports = Field;
