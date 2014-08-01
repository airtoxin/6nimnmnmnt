var Row = (function() {
    var threthold = 6;
    var row;

    function Row() {
        row = [];
    };

    Row.prototype.addCard = function(card) {
        row.push(card);
        if (row.length !== threthold) return null;

        var penaltyCards = row.slice(0, threthold - 1);
        row = [row[threthold - 1]];
        return penaltyCards;
    };

    Row.prototype.getValue = function () {
        if (row.length === 0) return null;
        var lastCard = row[row.length - 1];
        return lastCard.number;
    };

    return Row;
})();

module.exports = Row;
