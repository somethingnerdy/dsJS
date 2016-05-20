var dsJS = require('../dest/dsjs').Dictionary;
var should = require('should');
var map;

describe('Dictionary Library', function () {
    beforeEach(function () {
        map = dsJS();
    });
    it('should set a key-value pair', function (done) {
        map.set('firstname', 'John');
        map.set('lastname', 'Smith');
        map.get('firstname').should.eql('John');
        map.get('lastname').should.eql('Smith');
        map.size().should.eql(2);
        var keys = map.keys();
        keys.should.containEql('firstname', 'lastname');
        var values = map.values();
        values.should.containEql('John', 'Smith');
        done();
    });
    it('should remove a key and its value', function (done) {
        map.set('SF', 'CA');
        map.set('LA', 'CA');
        map.size().should.eql(2);
        map.get('LA').should.eql('CA');
        map.remove('LA').should.eql(true);
        map.remove('LA').should.eql(false);//try to remove it twice but it doenst exist
        (function () {return map.get('LA')}).should.be.undefined;
        var keys= map.keys();
        keys.should.containEql('SF');
        done();
    });
    it('should return all of the proper values or the dictionary', function (done) {
        map.set('SF', 'CA');
        map.set('NY', 'NY');
        map.set('ATL', 'GA');
        map.size().should.eql(3);
        map.values().should.containEql('CA', 'NY', 'GA');
        map.values().length.should.eql(3);
        done();
    });
    it('should retrieve all of the keys and then clear', function (done) {
        map.set('A', 'B');
        map.set('B', 'C');
        map.set('C', 'D');
        map.size().should.eql(3);
        map.keys().should.containEql('A', 'B', 'C');
        map.keys().length.should.eql(3);
        map.clear();
        map.size().should.eql(0);
        map.keys().length.should.eql(0);
        done();
    });
    it('should override a the value of an existing key-value pair', function (done) {
        map.set('Name', 'John');
        map.get('Name').should.eql('John');
        map.set('Name', 'Peter');
        map.get('Name').should.eql('Peter');
        done();
    });
});