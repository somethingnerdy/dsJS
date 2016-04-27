var dsJS = require('../dest/dsjs').Stack;
var should = require('should');
var stack;
describe('Stack Library', function () {
    beforeEach(function () {
        stack = dsJS();
    });
    it('should push items onto the stack and pop the val 3', function (done) {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.length().should.eql(3);
        var ele = stack.pop();
        (ele).should.eql(3);
        stack.length().should.eql(2);
        done();
    });
    it('should peek but not pop the val', function (done) {
        stack.push(1);
        stack.push(2);
        var peek = stack.peek();
        peek.should.eql(2);
        stack.length().should.eql(2);
        done();
    });
    it('should clear the stack', function (done) {
        stack.push(1);
        stack.push(3);
        stack.length().should.eql(2);
        stack.clear();
        stack.length().should.eql(0);
        done();
    });
    it('should return true if the stack is empty else false', function (done) {
        stack.isEmpty().should.eql(true);
        stack.push('a');
        stack.isEmpty().should.eql(false);
        done();
    });
    it('should print to the console', function (done) {
        stack.push(1);
        stack.push(3);
        stack.show();
        done();
    });
});
