var assert = require('assert');
var async = require('async');

var Row = require('../src/row');
var Card = require('../src/card');

describe('row', function () {
	describe('addCard', function () {
		var row;
		beforeEach(function (done) {
			row = new Row();
			done();
		});

		it('no penalty', function (done) {
			var penaltyCards = row.addCard(new Card(1));
			assert.deepEqual(penaltyCards, null);
			done();
		});
		it('return penalty', function (done) {
			var card1 = new Card(1),
				card2 = new Card(2),
				card3 = new Card(3),
				card4 = new Card(4),
				card5 = new Card(5),
				card6 = new Card(6);
			assert.deepEqual(row.addCard(card1), null);
			assert.deepEqual(row.addCard(card2), null);
			assert.deepEqual(row.addCard(card3), null);
			assert.deepEqual(row.addCard(card4), null);
			assert.deepEqual(row.addCard(card5), null);
			assert.deepEqual(row.addCard(card6), [card1, card2, card3, card4, card5]);
			done();
		});
	});
});
