
    /**
     * @module Linked List
     * @description
     */

    function Node (element) {
        'use strict';
        this.element = element;
        this.next = null;
    }
    /**
     * @name Linked List
     * @constructor
     * @property listSize {Number} Number of elements in the list
     * @property position {Number} Current position in the list
     * @property dataStore {Array} Array to store a list of elements
     */
    function LinkedList () {
        'use strict';
        this.head = new Node('head');
    }

    LinkedList.prototype = {
        find: function (item) {
            var currentNode = this.head;
            while (currentNode.element !== item) {
                currentNode = currentNode.next;
            }
            return currentNode;
        },
        insert: function (element, item) {
            var newNode = new Node(element);
            var current = this.find(item);
            newNode.next = current.next; //set the new node to point to whatever the current was pointing to.
            current.next = newNode; //change the current to point to the newly inserted node.
        },
        findPrevious: function (item) {
            var currentNode = this.head;
            while ((currentNode.next !== null) && (currentNode.next.element !== item)) {
                currentNode = currentNode.next;
            }
            return currentNode;
        },
        remove: function (item) {
            var prevNode = this.findPrevious(item);
            if (prevNode.next !== null) {
                prevNode.next = prevNode.next.next;
            }
        },
        display: function () {
            var currNode = this.head;
            while (!(currNode.next == null)) {
                console.log(currNode.next.element);
                currNode = currNode.next;
            }
        }
    };