/**
 * @class Graph
 * @classdesc
 * @constructor
 */
dsJS.Graph = function () {
    var vertices = [];
    var adj = dsJS.Dictionary();
    /**
     * @property addVertex
     * @description Add a new vertex to the graph.
     * @param v {string|number} Name of the vertex.
     */
    var addVertex = function (v) {
        vertices.push(v);
        adj.set(v, []);
    };
    /**
     * @property addEdge
     * @description Add an edge by connecting two vertices
     * @param v1 The first vertex
     * @param v2 The second vertex
     */
    var addEdge = function (v1, v2) {
        adj.get(v1).push(v2);
        adj.get(v2).push(v1); //Comment this line if you want a directed graph
    };
    /**
     * @property toString
     * @description Creates a string of the adjacent list representation
     * @returns {string} The adjacent list representation
     */
    var toString = function () {
        var s = '';
        for (var i = 0, len = vertices.length; i < len; i++) {
            s += vertices[i] + ' -> ';
            var neighbors = adj.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j++){
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };

    return {
        addVertex: addVertex,
        addEdge: addEdge,
        toString: toString
    };
};