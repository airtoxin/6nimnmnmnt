var assert = require('assert');

var Card = require('../src/card');

describe('field', function () {
	describe('constructor', function () {
		var Field = require('../src/field');
		it('singleton', function (done) {
			var fieldSingleton = new Field([new Card(1)]);
			assert.equal(fieldSingleton, Field());

			var fieldDuplicate = new Field([]);
			assert.equal(fieldSingleton, fieldDuplicate);
			done();
		});
		delete Field;
	});
	describe('setCard', function () {
		var Field = require('../src/field');
		it('ok', function (done) {
			var field = new Field([new Card(1), new Card(3), new Card(39), new Card(97)]);
			field.setCard(new Card(50));
			done();
		});
	});
});
