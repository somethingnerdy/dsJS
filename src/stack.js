if (typeof define !== 'function') { var define = require('../node_modules/amdefine')(module); }

define(function () {
    /**
     * @module Stack
     * @description Last-In First-Out (LIFO)
     */

    /**
     * @name Stack
     * @constructor
     * @property listSize {Number} Number of elements in the list
     * @property position {Number} Current position in the list
     * @property dataStore {Array} Array to store a list of elements
     */
    function Stack () {
        'use strict';
        this.dataStore = [];
        this.top = 0;
        /**
         *
         * @param element
         */
        this.push = function (element) {
            this.dataStore[this.top++] = element;
        };
        this.pop = function () {
            return this.dataStore[--this.top];
        };
        this.peek = function () {
            return this.dataStore[this.top - 1];
        };
        this.length = function () {
            return this.top;
        };
        this.clear = function () {
            this.top = 0;
        }
    }
});
