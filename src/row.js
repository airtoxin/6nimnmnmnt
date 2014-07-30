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

    return Row;
})();

module.exports = Row;
