var _ = require('lodash');

var Row = require('../src/row');

var Field = (function() {
    function Field(setupCards) {
    	var self = this;
        // singleton

        this.rows = [];
        _.each(setupCards, function (card) {
        	self.rows.push(new Row(card));
        });
    };

    Field.prototype.move = function() {
        // do something
    };

    return Field;
})();

module.exports = Field;
