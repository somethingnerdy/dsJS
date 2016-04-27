/**
 * A Stack is a First-In Last-Out (FILO) data structure. Data is inserted in the front and removed from the end.
 * A real world example of a stack would be a stack of trays.
 * @returns {{dataStore: Array, top: number, push: Function, pop: Function, peek: Function, length: Function, clear: Function, isEmpty: Function, show: Function}}
 * @constructor dsJS.Stack
 */
dsJS.Stack = function () {
    /**
     * The dataStore is where the elements of the stack are stored.
     * The current implementation is an array.
     * @property dataStore
     * @private
     * @memberof dsJS.Stack
     * @type {array}
     */
    var dataStore = [];
    /**
     * The top of the stack. Used as the index and length for methods in the Stack class
     * @property top
     * @private
     * @memberof dsJS.Stack
     * @type {number}
     */
    var top = 0;
    /**
     * Pushes an element onto the top of the stack (dataStore).
     * This function is equivalent to JS's array.push()
     * @function push
     * @memberof dsJS.Stack
     * @param {String | Number} element Value to push onto the stack.
     */
    var push = function (element) {
        dataStore[top++] = element;
    };
    /**
     * Removes the element at the top of the stack
     * @function pop
     * @memberof dsJS.Stack
     * @returns {*} The top element of the stack. If the stack/dataStore is empty
     *              it will return undefined.
     */
    var pop = function () {
        return dataStore[--top];
    };
    /**
     * Get the element at the top of the stack without popping it.
     * @function peek
     * @memberof dsJS.Stack
     * @returns {*} The element at the top of the stack. Undefined if the stack is empty
     */
    var peek = function () {
        return dataStore[top - 1];
    };
    /**
     * The length of the stack
     * @function length
     * @memberof dsJS.Stack
     * @returns {number} The length of the stack
     */
    var length = function () {
        return top;
    };
    /**
     * Clears the stack. Sets the top and the length of dataStore to 0
     * @function clear
     * @memberof dsJS.Stack
     */
    var clear = function () {
        top = 0;
        dataStore.length = 0;
    };
    /**
     * Checks to see if the stack doesnt contain elements.
     * @function isEmpty
     * @memberof dsJS.Stack
     * @returns {boolean} True, if there are elements in the stack. False, if the
     *                    stack is empty
     */
    var isEmpty = function () {
        return top <= 0;
    };
    var show = function () {
        if (console) {
            console.log(dataStore);
        }
    };

    /** @lends dsJS.Stack */
    return {
        push : push,
        pop : pop,
        peek : peek,
        length : length,
        clear : clear,
        isEmpty : isEmpty,
        show : show
    }
};
