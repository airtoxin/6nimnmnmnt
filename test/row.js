var assert = require('assert');
var async = require('async');

var Row = require('../src/row');

describe('row', function () {
	describe('constructor', function () {
		it('ok', function (done) {
			var row = new Row({hoge: 'fuga'});
			assert.equal(row.row.length, 1);
			assert.deepEqual(row.row[0], {hoge: 'fuga'});
			done();
		});
	});
	describe('addCard', function () {
		var row;
		beforeEach(function (done) {
			row = new Row({hoge: 'fuga'});
			done();
		});
		it('no penalty', function (done) {
			var penaltyCards = row.addCard({foo: 'bar'});
			assert.deepEqual(row.row, [{hoge: 'fuga'}, {foo: 'bar'}]);
			assert.deepEqual(penaltyCards, []);
			done();
		});
		it('return penalty', function (done) {
			row.addCard({1: 'bar'});
			row.addCard({2: 'bar'});
			row.addCard({3: 'bar'});
			row.addCard({4: 'bar'});
			var penaltyCards = row.addCard({asdf: 'zxcv'});
			assert.deepEqual(penaltyCards, [{hoge: 'fuga'}, {1: 'bar'}, {2: 'bar'}, {3: 'bar'}, {4: 'bar'}]);
			assert.deepEqual(row.row, [{asdf: 'zxcv'}]);
			done();
		});
	});
});
