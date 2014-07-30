var assert = require('assert');

var Field = require('../src/field');
var Card = require('../src/card');

describe('field', function () {
	describe('constructor', function () {
		it('singleton', function (done) {
			var fieldSingleton = new Field([new Card(1)]);
			assert.equal(fieldSingleton, Field());

			var fieldDuplicate = new Field([]);
			assert.equal(fieldSingleton, fieldDuplicate);
			done();
		});
	});
});
