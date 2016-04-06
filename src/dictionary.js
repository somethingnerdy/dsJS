dsJS.Dictionary = function () {
    /**
     * @name set
     * @description Adds a new item to the dictionary
     * @param key
     * @param val
     */
    var set = function (key, val) {
        this.dataStore[key] = val;
    };

    var remove = function (key) {
        if (this.has(key)) {
            delete this.dataStore[key];
            return true;
        }
        return false;
    };
    var has = function (key) {
        return key in this.dataStore;
    };
    var get = function (key) {
        return this.has(key) ? this.dataStore[key] : undefined;
    };
    var clear = function () {
        this.dataStore = {};
    };
    var size = function () {
        return Object.keys(this.dataStore).length;
    };
    var keys = function () {
        return Object.keys(this.dataStore);
    };
    var values = function () {
        var values = [];
        for (var key in this.dataStore) {
            if (this.has(key)) {
                values.push(this.dataStore[key]);
            }
        }
        return values;
    };
    var getAll = function () {
        return this.dataStore;
    };

    return {
        dataStore: {},
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