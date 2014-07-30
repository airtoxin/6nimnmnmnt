var _ = require('lodash');
var assert = require('assert');

var Pile = require('../src/pile');
var Card = require('../src/card');

describe('pile', function () {
    var pile;
    beforeEach(function (done) {
        pile = new Pile(10);
        done();
    });
    describe('draw', function () {
        it('ok', function (done) {
            assert.deepEqual(pile.draw(), new Card(1));
            done();
        });
        it('empty pile', function (done) {
            pile = new Pile(1);
            pile.draw() // pile is empty
            assert.ok(_.isNull(pile.draw()));
            done();
        });
    });
});
