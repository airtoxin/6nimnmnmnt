var assert = require('assert');
var async = require('async');
var Card = require('../src/card');

describe('card', function () {
	describe('constructor', function () {
		it('102', function (done) {
			var card = new Card(102);
			assert.equal( card.number, 102 );
			assert.equal( card.penalty, 1 );
			done();
		});
		it('15', function (done) {
			var card = new Card(15);
			assert.equal( card.number, 15 );
			assert.equal( card.penalty, 2 );
			done();
		});
		it('20', function (done) {
			var card = new Card(20);
			assert.equal( card.number, 20 );
			assert.equal( card.penalty, 3 );
			done();
		});
		it('55', function (done) {
			var card = new Card(55);
			assert.equal( card.number, 55 );
			assert.equal( card.penalty, 7 );
			done();
		});
		it('66', function (done) {
			var card = new Card(66);
			assert.equal( card.number, 66 );
			assert.equal( card.penalty, 5 );
			done();
		});
	});
});
