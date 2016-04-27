/**
 * @class Graph
 * @classdesc
 * @constructor
 */
dsJS.Graph = function () {
    /**
     * @name vertices
     * @private
     * @description Store all of the vertices in an array.
     * @type {Array}
     */
    var vertices = [];
    /**
     * @name adj
     * @private
     * @description Storing the adjacent list by using a dsJS.Dictionary(). The name of
     *              the vertex as the key and the list of adjacent vertices as a value
     * @type {{dataStore, set, remove, has, get, clear, size, keys, values, getAll}}
     * @see dsJS.Dictionary
     */
    var adj = dsJS.Dictionary();
    /**
     *
     * @returns {Array}
     */
    var initVisited = function () {
        var visited = [];
        for (var i = 0, len = vertices.length; i < len; i++) {
            visited[vertices[i]] = 0;
        }
        return visited;
    };
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
    /*
    var bfs = function (vertex, callback) {
        var visited = initVisited();
        var queue = dsJS.Queue();
        queue.enqueue(vertex);

        while(!queue.isEmpty()) {
            var currentVertex = queue.dequeue();
            var neighbors = adj.get(currentVertex);
            visited[currentVertex] = 1;

            for (var i = 0, len = neighbors.length; i < len; i++) {
                var currentNeighbor = neighbors[i];
                if (visited[currentNeighbor] === 0) {
                    visited[currentNeighbor] = 1;
                    queue.enqueue(currentNeighbor);
                }
            }

            visited[currentNeighbor] = 2;

            if (callback) {
                callback(currentVertex);
            }
        }
    };
    */
    var BFS = function (vertex) {
        var visited = initVisited();
        var distances = [];
        var predecessors = [];
        var queue = dsJS.Queue();
        queue.enqueue(vertex);

        // Init the distances and predecessors
        for (var i = 0, len = vertices.length; i < len; i++) {
            var currVertex = vertices[i];
            distances[currVertex] = 0;
            predecessors[currVertex] = null;
        }
        /**
         * If the queue is not empty dequeue a vertex and retrieve its neighbors.
         * Iterate through the neighbors and mark it as discovered (1), add to the
         * queue then mark as visited (2)
         */
        while (!queue.isEmpty()) {
            var currVertex = queue.dequeue();
            var neighbors = adj.get(currVertex);
            visited[currVertex] = 1;

            for (var i = 0, len = neighbors.length; i < len; i++) {
                var currNeighbor = neighbors[i];

                if (visited[currNeighbor] === 0) {
                    visited[currNeighbor] = 1;
                    distances[currNeighbor] = distances[currVertex] + 1;
                    predecessors[currNeighbor] = currVertex;
                    queue.enqueue(currNeighbor);
                }
            }
            visited[currVertex] = 2;
        }

        return {
            distances: distances,
            predecessors: predecessors
        };
    };
    var shortestPathUnweighted = function (start, end) {
        var bfsResults = BFS(start);
        var distance = bfsResults.distances;
        var pred = bfsResults.predecessors;


    };
    return {
        addVertex: addVertex,
        addEdge: addEdge,
        toString: toString
    };
};