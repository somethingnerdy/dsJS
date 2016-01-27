/**
 * @module List
 * @description A list is an ordered sequence of data. In JavaScript, each data
 *              stored in the list is an element of which can be of any data
 *              type. This implementation is an ADT (abstract data type)
 */

/**
 * @name List
 * @constructor
 * @property listSize {Number} Number of elements in the list
 * @property position {Number} Current position in the list
 * @property dataStore {Array} Array to store a list of elements
 */
function List() {
    'use strict';
    this.listSize = 0;
    this.position = 0;
    this.dataStore = [];
}

List.prototype = {
    append: function (element) {
        this.dataStore[this.listSize++] = element;
    },
    clear: function () {
        //delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.position = 0;
    },
    insert: function (element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    },
    find: function (element) {
        for (var i = 0, len = this.dataStore.length; i < len; i++) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    },
    contains: function (element) {
        for (var i = 0, len = this.dataStore.length; i < len; i++) {
            var currentPos = this.dataStore[i];
            if (this.dataStore[i] === element) {
                return true;
            }
        }
        return false;
    },
    remove: function (element) {
        var location = this.find(element);
        if (location > -1) {
            this.dataStore.splice(location, 1);
            --this.listSize;
            return true;
        }
        return false;
    },
    getCurrentPosition: function () {
        return this.position;
    },
    getElement: function () {
        return this.dataStore[this.position];
    },
    front: function () {
        this.position = 0;
    },
    end: function () {
        this.position = this.listSize - 1;
    },
    previous: function () {
        if (this.position > 0) {
            --this.position;
        }
    },
    next: function () {
        if (this.position < this.listSize - 1) {
            ++this.position;
        }
    },
    length: function () {
        return this.listSize;
    },
    moveTo: function (position) {
        this.position = position;
    },
    toString: function () {
        return this.dataStore;
    }
};