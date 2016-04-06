/**
 * @module List
 * @description A list is an ordered sequence of data. In JavaScript, each data
 *              stored in the list is an element of which can be of any data
 *              type. This implementation is an ADT (abstract data type)
 */

/**
 * @name List
 * @constructor
 */
dsJS.List = function () {
    var append = function (element) {
        this.dataStore[this.listSize++] = element;
    };
    var clear = function () {
        this.dataStore.length = 0;
        this.listSize = this.position = 0;
    };
    var insert = function (element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    };
    var find = function (element) {
        for (var i = 0, len = this.dataStore.length; i < len; i++) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    };
    var contains = function (element) {
        for (var i = 0, len = this.dataStore.length; i < len; i++) {
            var currentPos = this.dataStore[i];
            if (this.dataStore[i] === element) {
                return true;
            }
        }
        return false;
    };
    var remove = function (element) {
        var location = this.find(element);
        if (location > -1) {
            this.dataStore.splice(location, 1);
            --this.listSize;
            return true;
        }
        return false;
    };
    var getCurrentPosition = function () {
        return this.position;
    };
    var getElement = function () {
        return this.dataStore[this.position];
    };
    var front = function () {
        this.position = 0;
    };
    var end = function () {
        this.position = this.listSize - 1;
    };
    var previous = function () {
        if (this.position > 0) {
            --this.position;
        }
    };
    var next = function () {
        if (this.position < this.listSize - 1) {
            ++this.position;
        }
    };
    var length = function () {
        return this.listSize;
    };
    var moveTo = function (position) {
        this.position = position;
    };
    var toString = function () {
        return this.dataStore;
    };
    return {
        listSize : 0,
        position: 0,
        dataStore: [],
        append: append,
        clear: clear,
        insert: insert,
        find: find,
        contains: contains,
        remove: remove,
        getCurrentPosition: getCurrentPosition,
        getElement: getElement,
        front: front,
        end: end,
        previous: previous,
        next: next,
        length: length,
        moveTo: moveTo,
        toString: toString
    };
};