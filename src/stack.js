/**
 * @class Stack
 * @classdesc A Stack is a First-In Last-Out (FIFO) data structure.
 * @constructor
 */
dsJS.Stack = function () {
    /** @lends Stack */
    return {
        /**
         * @property dataStore
         * @description The dataStore is where the elements of the stack are stored.
         *              The current implementation is an array.
         */
        dataStore: [],
        /**
         * @property top
         * @description The top of the stack. Used as the index and length for methods
         *              in the Stack class.
         */
        top: 0,
        /**
         * @property push
         * @description Pushes an element onto the top of the stack (dataStore).
         *              This function is equivalent to JS's array.push()
         * @param {String | Number} element Value to push onto the stack.
         */
        push : function (element) {
            this.dataStore[this.top++] = element;
        },
        /**
         * @property pop
         * @description Removes the element at the top of the stack
         * @returns {*} The top element of the stack. If the stack/dataStore is empty
         *              it will return undefined.
         */
        pop : function () {
            return this.dataStore[--this.top];
        },
        /**
         * @property peek
         * @description
         * @returns {*}
         */
        peek : function () {
            return this.dataStore[this.top - 1];
        },
        /**
         * @property length
         * @description
         * @returns {number}
         */
        length : function () {
            return this.top;
        },
        /**
         * @property clear
         * @description
         */
        clear : function () {
            this.top = 0;
            this.dataStore.length = 0;
        },
        /**
         * @property isEmpty
         * @description
         * @returns {boolean}
         */
        isEmpty : function () {
            return this.top <= 0;
        }
    }
};
