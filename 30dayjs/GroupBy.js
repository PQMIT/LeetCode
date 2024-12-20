/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, val) => {
        const key = fn(val);
        acc[key] = acc[key] || [];
        acc[key].push(val);
        return acc;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */