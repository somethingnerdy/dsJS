if (typeof define !== 'function') { var define = require('../node_modules/amdefine')(module); }

define(function () {
    function Node (data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.show = show;
    }
    function show () {
        return this.data;
    }

    function BST () {
        this.root = null;
        this.insert = insert;
        this.inOrder = inOrder;
        this.preOrder = preOrder;
        this.postOrder = postOrder;
        this.find = find;
        this.remove = remove;
        this.getMin = getMin;
        this.getMax = getMax;

    }

    function insert (data){
        var node = new Node(data, null, null);
        if (this.root === null) {
            this.root = node;
        } else {
            var currentNode = this.root;
            var parent;
            while (true) {
                parent = currentNode;
                if (data < currentNode.data) {
                    currentNode = currentNode.left;
                    if (currentNode === null) {
                        parent.left = node;
                        break;
                    }
                } else {
                    currentNode = currentNode.right;
                    if (currentNode === null) {
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }

    /**
     * An inorder traversal visits all of the nodes of a BST in ascending order of the node key values.
     * @example 3 16 22 23 37 45 99
     * @param node
     */
    function inOrder (node) {
        if (!(node === null)) {
            inOrder(node.left);
            console.log(node.show() + " ");
            inOrder(node.right);
        }
    }

    /**
     * A preorder traversal visits the root node first,
     * followed by the nodes in the subtrees under the left child of the root node,
     * followed by the nodes in the subtrees under the right child of the root node.
     * @example 23 16 3 22 45 37 99
     * @param node
     */
    function preOrder (node) {
        if (!(node === null)) {
            console.log(node.show() + " ");
            preOrder(node.left);
            preOrder(node.right);
        }
    }

    /**
     * @example 3 22 16 37 99 45 23
     * @param node
     */
    function postOrder (node) {
        if (!(node === null)) {
            postOrder(node.left);
            postOrder(node.right);
            console.log(node.show() + " ");
        }
    }

    function getMin () {
        var currentNode = this.root;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.data;
    }

    function getMax () {
        var currentNode = this.root;
        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }
    function getSmallest (data) {
        while(data.left) {
            data = data.left;
        }
        return data;
    }
    function find (data) {
        var currentNode = this.root;
        while (currentNode.data !== data) {
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
            if (currentNode === null) {
                return null;
            }
        }
        return currentNode;
    }
    function remove(data) {
        var root = removeNode(this.root, data);
    }

    function removeNode(node, data) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            // node has no children
            if (node.left == null && node.right == null) {
                return null;
            }
            // node has no left child
            if (node.left == null) {
                return node.right;
            }
            // node has no right child
            if (node.right == null) {
                return node.left;
            }
            // node has two children
            var tempNode = getSmallest(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        }
        else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        }
        else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }
});