var _ = require('lodash');

var Person = (function() {
    function Person(name) {
        this.name = name;
    };

    Person.prototype.move = function() {
        // do something
    };

    return Person;
})();

module.exports = Person;
