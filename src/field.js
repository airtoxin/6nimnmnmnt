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

    getRowsValue = function () {
        return _.map(rows, function (row) {
            return row.getValue();
        });
    };

    Field.prototype.setCard = function (card) {
        console.log("@rows:", rows);
    };

    return Field;
})();

module.exports = Field;
