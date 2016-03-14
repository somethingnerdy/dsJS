if (typeof define !== 'function') { var define = require('../node_modules/amdefine')(module); }

define(function () {
    /**
     * @module Queue
     * @description First-In First-Out (FIFO)
     */

    /**
     * @name Queue
     * @constructor
     * @property listSize {Number} Number of elements in the list
     * @property position {Number} Current position in the list
     * @property dataStore {Array} Array to store a list of elements
     */
    function Queue () {
        'use strict';
        this.dataStore = [];
    }

    Queue.prototype = {
        enqueue = function (element) {
            this.dataStore.push(element);
        },
        dequeue = function () {
            if (this.dataStore.length > 0) {
                return this.dataStore.shift();
            }
        },
        front = function () {
            return this.dataStore[0];
        },
        back = function () {
            return this.dataStore[this.dataStore.length - 1];
        },
        toString = function () {
            var string = '';
            for (var i = 0, len = this.dataStore.length; i < len; i++) {
                string += this.dataStore[i] + '\n';
            }
            return string;
        },
        empty = function () {
            if (this.dataStore.length === 0) {
                return true;
            }
            return false;
        },
    };
});
