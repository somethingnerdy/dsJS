/**
 * @class Queue
 * @classdesc A Queue is a First-In First-Out (FIFO) data structure. Data is inserted at the end
 *            and are removed from the front. Queues are used to store data in the order in
 *            which they occur.
 * @constructor
 */
dsJS.Queue = function () {
    /**
     * @property enqueue
     * @description Pushes an element to the front of the queue
     * @param {String | Number} element Element to store in the queue
     */
    var enqueue = function (element) {
        this.dataStore.push(element);
    };
    /**
     * @property dequeue
     * @description
     * @returns {T}
     */
    var dequeue = function () {
        if (this.dataStore.length > 0) {
            return this.dataStore.shift();
        }
    };
    /**
     * @property front
     * @description
     * @returns {*}
     */
    var front = function () {
        return this.dataStore[0];
    };
    /**
     * @property back
     * @description
     * @returns {*}
     */
    var back = function () {
        return this.dataStore[this.dataStore.length - 1];
    };
    /**
     * @property toString
     * @description
     * @returns {string}
     */
    var toString = function () {
        var string = '';
        for (var i = 0, len = this.dataStore.length; i < len; i++) {
            string += this.dataStore[i] + '\n';
        }
        return string;
    };
    /**
     * @property isEmpty
     * @description Checks to see if the queue doesn't contain elements.
     * @returns {boolean} True, if there are elements in the stack. False, if the
     *                    queue is empty
     */
    var isEmpty = function () {
        return this.dataStore.length === 0;
    };
    /**
     * @property length
     * @returns {*|j|i|o}
     */
    var length = function () {
        return this.dataStore.length;
    };
    /** @lends Queue */
    return {
        dataStore : [],
        enqueue : enqueue,
        dequeue : dequeue,
        front : front,
        back : back,
        toString : toString,
        isEmpty : isEmpty,
        length: length
    }
};