dsJS.LinkedList = function () {
    /**
     * TODO: make a utility object to inherit this
     * @param element
     * @returns {{element: *, next: null}}
     * @constructor
     */
    var Node = function (element) {
        return {
            element: element,
            next: null
        };
    };
    var length = 0;
    var head = null;
    /**
     *
     * @returns {*}
     */
    var getHead = function () {
        return head;
    };
    /**
     * This adds a new item to the end of the list
     * @param element {String|Number} The element to store
     */
    var append = function (element) {
        var node = Node(element);
        var current;

        if (head === null) {
            head = node;
        } else {
            current = head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        length++;
    };
    /**
     * Inserts a new item at a specified position in the list
     * @param position {number} The position to insert the element
     * @param element {number|string}
     * @returns {boolean}
     */
    var insert = function (position, element) {
        if (position >= 0 && position <= length) {
            var node = Node(element);
            var current = head;
            var previous;
            var index = 0;

            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    /**
     * This removes an item from the list.
     * @param element
     * @returns {null}
     */
    var remove = function (element) {
        var index = indexOf(element);
        return removeAt(index);
    };
    /**
     * This returns the index of the element in the list. If the element is not in the list, it returns -1.
     * @param element
     * @returns {number}
     */
    var indexOf = function (element) {
        var current = head;
        var index = -1;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    /**
     * Removes an item from a specified position in the list
     * @param position {Number} The position of the to be removed element
     * @returns {null|}
     */
    var removeAt = function (position) {
        if (position >= 0 && position < length) {
            var current = head;
            var previous;
            var index = 0;

            if (position === 0) {
                head = current.next;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }

                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    /**
     * This returns true if the linked list does not contain any elements and false if the size of the linked list is bigger than 0.
     * @returns {boolean}
     */
    var isEmpty = function () {
        return length === 0;
    };
    /**
     * This returns how many elements the linked list contains.
     * @returns {number}
     */
    var size = function () {
        return length;
    };
    /**
     * As the list uses a Node class as an item, we need to overwrite the default toString method inherited from the JavaScript object to output only the element values
     * @returns {string}
     */
    var toString = function () {
        var current = head;
        var string = '';

        while (current) {
            string += current.element + ' -> ';
            current = current.next;
        }
        return string;
    };
    var reverse = function () {
        var current = head;
        var previous = null;
        var temp;
        if (head === null || head.next === null) {
            return;
        }

        while (current) {
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        head = previous;
        return previous;
    };
    var reverseBetween = function(m, n) {};
    var hasCycle = function () {};
    return {
        getHead: getHead,
        append: append,
        insert: insert,
        remove: remove,
        indexOf: indexOf,
        removeAt: removeAt,
        reverse: reverse,
        isEmpty: isEmpty,
        size: size,
        toString: toString
    };
};