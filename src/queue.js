/**
 * A Queue is a First-In First-Out (FIFO) data structure. Data is inserted at the end and are removed from the front.
 * Queues are used to store data in the order in which they occur.
 *
 * @returns {{dataStore: Array, enqueue: Function, dequeue: Function, front: Function, back: Function, toString: Function, isEmpty: Function, length: Function}}
 * @constructor dsJS.Queue
 * @todo make the dataStore private
 */
dsJS.Queue = function () {
    /**
     * The Queue defined as an JS array
     * @property dataStore
     * @private
     * @type {Array}
     */
    var dataStore = [];
    /**
     * Pushes an element to the front of the queue
     * @function enqueue
     * @memberof dsJS.Queue
     * @param {mixed} element Element to store in the queue
     */
    var enqueue = function (element) {
        dataStore.push(element);
    };
    /**
     * Removes the first element in the queue
     * @function dequeue
     * @memberof dsJS.Queue
     * @returns {mixed} The first element in the queue
     */
    var dequeue = function () {
        if (dataStore.length > 0) {
            return dataStore.shift();
        }
    };
    /**
     * Gives you the first element in the queue
     * @function front
     * @memberof dsJS.Queue
     * @returns {*} The first element of the queue
     */
    var front = function () {
        return dataStore[0];
    };
    /**
     * Gives you the last element in the queue
     * @function back
     * @memberof dsJS.Queue
     * @returns {*}
     */
    var back = function () {
        return dataStore[dataStore.length - 1];
    };
    /**
     * Convert the queue into a string
     * @function toString
     * @memberof dsJS.Queue
     * @returns {string} the elements in the queue
     */
    var toString = function () {
        var string = '';
        for (var i = 0, len = dataStore.length; i < len; i++) {
            string += dataStore[i] + '\n';
        }
        return string;
    };
    /**
     * Checks to see if the queue doesn't contain elements
     * @function isEmpty
     * @memberof dsJS.Queue
     * @returns {boolean} True, if there are elements in the stack. False, if the
     *                    queue is empty
     */
    var isEmpty = function () {
        return dataStore.length === 0;
    };
    /**
     * Gives you the length of the queue
     * @function length
     * @memberof dsJS.Queue
     * @returns {number} The amount of elements in the queue
     */
    var length = function () {
        return dataStore.length;
    };
    /** @lends dsJS.Queue */
    return {
        enqueue : enqueue,
        dequeue : dequeue,
        front : front,
        back : back,
        toString : toString,
        isEmpty : isEmpty,
        length: length
    }
};