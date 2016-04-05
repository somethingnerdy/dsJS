var dsJS = require('../dest/all').Queue;
var should = require('should');
var queue;

describe('Queue library', function () {
    beforeEach(function () {
        queue = dsJS();
    });
    it('should enqueue items to the queue and dequeue an item', function (done) {
        queue.enqueue('a');
        queue.enqueue('b');
        queue.length().should.eql(2);
        queue.dequeue().should.eql('a');
        queue.length().should.eql(1);
        done();
    });
    it('should return the first and last item', function (done) {
        queue.enqueue('a');
        queue.enqueue('b');
        queue.length().should.eql(2);
        queue.front().should.eql('a');
        queue.back().should.eql('b');
        queue.length().should.eql(2);
        done();
    });
    it('should return true if empty else false', function (done) {
        queue.isEmpty().should.eql(true);
        queue.enqueue('a');
        queue.isEmpty().should.eql(false);
        done();
    });
    it('should return queue as a string', function (done) {
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        queue.toString().should.eql('a' +'\n'+ 'b'+'\n' +'c'+ '\n');
        done();
    });
});