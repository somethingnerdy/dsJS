/**
 * A dictionary, also known as a map, is used to store [key:value] pairs where the key is used to find a particular element.
 * @returns {{dataStore: {}, set: Function, remove: Function, has: Function, get: Function, clear: Function, size: Function, keys: Function, values: Function, getAll: Function}}
 * @constructor dsJS.Dictionary
 * @todo test performance fo this.has or just using has
 */
dsJS.Dictionary = function () {
    /**
     * The dictionary defined as an object literal
     * @property {object} dataStore
     * @memberof dsJS.Dictionary
     * @private
     */
    var dataStore = {};
    /**
     * Adds a new item to the dictionary
     * @function set
     * @memberof dsJS.Dictionary
     * @param key {mixed} A unique key that is used to access the paired value
     * @param val {mixed} The value associated
     */
    var set = function (key, val) {
        dataStore[key] = val;
    };
    /**
     * Removes the value from the dictionary using the key
     * @function remove
     * @memberof dsJS.Dictionary
     * @param key {string|number} The key name to be removed
     * @returns {boolean} Returns true if the key was found and removed, false otherwise
     */
    var remove = function (key) {
        if (this.has(key)) {
            delete dataStore[key];
            return true;
        }
        return false;
    };
    /**
     * Checks for the existence of a key in the dictionary
     * @function has
     * @memberof dsJS.Dictionary
     * @param key {string|number} The name of the key that we want to check for its existence
     * @returns {boolean} Returns true if the key exists in the dictionary, false otherwise
     */
    var has = function (key) {
        return key in dataStore;
    };
    /**
     * Retrieves the value associated with the key
     * @function get
     * @memberof dsJS.Dictionary
     * @param key {string|number} The name of the key
     * @returns {*} Returns the specific value searched by the key. If the key doesn't exist, it
     *              will return undefined.
     */
    var get = function (key) {
        return this.has(key) ? dataStore[key] : undefined;
    };
    /**
     * Removes all of the items from the dictionary
     * @function clear
     * @memberof dsJS.Dictionary
     */
    var clear = function () {
        dataStore = {};
    };
    /**
     * Similar to the length function in an array, size returns the number
     * of keys in the dictionary
     * @function size
     * @memberof dsJS.Dictionary
     * @returns {number} Returns the number of keys in the dictionary
     */
    var size = function () {
        return Object.keys(dataStore).length;
    };
    /**
     * Returns all the keys in the dictionary
     * @function keys
     * @memberof dsJS.Dictionary
     * @returns {Array} Returns all the keys that the dictionary contains
     */
    var keys = function () {
        return Object.keys(dataStore);
    };
    /**
     * Returns all the values in the dictionary
     * @function values
     * @memberof dsJS.Dictionary
     * @returns {Array} Returns all the values of the dictionary
     */
    var values = function () {
        var values = [];
        for (var key in dataStore) {
            if (this.has(key)) {
                values.push(dataStore[key]);
            }
        }
        return values;
    };
    /**
     * Return the entire dictionary as an object
     * @function getAll
     * @memberof dsJS.Dictionary
     * @returns {object} Returns the entire dictionary
     */
    var getAll = function () {
        return dataStore;
    };
    /** @lends dsJS.Dictionary **/
    return {
        set: set,
        remove: remove,
        has: has,
        get: get,
        clear: clear,
        size: size,
        keys: keys,
        values: values,
        getAll: getAll
    };
};