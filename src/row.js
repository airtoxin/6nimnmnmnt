var Row = (function() {
    function Row(card) {
    	this.threthold = 6;
        this.row = [card];
    };

    Row.prototype.addCard = function(card) {
        this.row.push(card);
        if (this.row.length !== this.threthold) return [];
        var penaltyCards = this.row.slice(0, this.threthold - 1);
        this.row = [this.row[this.threthold - 1]];
        return penaltyCards;
    };

    return Row;
})();

module.exports = Row;
