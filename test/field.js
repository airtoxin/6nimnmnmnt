var assert = require('assert');

var Field = require('../src/field');
var Row = require('../src/row');

describe('field', function () {
	describe('constructor', function () {
		var field;
		beforeEach(function (done) {
			field = new Field([
				{1: 100},
				{2: 200},
				{3: 300},
				{4: 400}
			]);
			done();
		});
		it('ok', function (done) {
			assert.deepEqual(field.rows, [
				new Row({1: 100}),
				new Row({2: 200}),
				new Row({3: 300}),
				new Row({4: 400})
			]);
			done();
		});
		it('singleton', function (done) {
			// TODO
			done();
		});
	});
});
