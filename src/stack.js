/**
 * @class Stack
 * @classdesc A Stack is a First-In Last-Out (FILO) data structure.
 * @constructor
 */
dsJS.Stack = function () {
    /**
     * @property push
     * @description Pushes an element onto the top of the stack (dataStore).
     *              This function is equivalent to JS's array.push()
     * @param {String | Number} element Value to push onto the stack.
     */
    var push = function (element) {
        this.dataStore[this.top++] = element;
    };
    /**
     * @property pop
     * @description Removes the element at the top of the stack
     * @returns {*} The top element of the stack. If the stack/dataStore is empty
     *              it will return undefined.
     */
    var pop = function () {
        return this.dataStore[--this.top];
    };
    /**
     * @property peek
     * @description Returns the element at the top of the stack without popping it.
     * @returns {*} The element at the top of the stack. Undefined if the stack is empty
     */
    var peek = function () {
        return this.dataStore[this.top - 1];
    };
    /**
     * @property length
     * @description
     * @returns {number}
     */
    var length = function () {
        return this.top;
    };
    /**
     * @property clear
     * @description Clears the stack. Sets the top and the length of dataStore to 0
     */
    var clear = function () {
        this.top = 0;
        this.dataStore.length = 0;
    };
    /**
     * @property isEmpty
     * @description Checks to see if the stack doesnt contain elements.
     * @returns {boolean} True, if there are elements in the stack. False, if the
     *                    stack is empty
     */
    var isEmpty = function () {
        return this.top <= 0;
    };
    var show = function () {
        if (console) {
            console.log(this.dataStore);
        }
    };

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
        push : push,
        pop : pop,
        peek : peek,
        length : length,
        clear : clear,
        isEmpty : isEmpty,
        show : show
    }
};
