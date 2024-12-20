/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    return arr.reduce((acc, item) => {
        console.log("item", item, "Array.isArray(item)", Array.isArray(item));

        if (Array.isArray(item) && n > 0) {
            acc.push(...flat(item, n - 1));
        } else {
            acc.push(item);
        }
        return acc;
    }, []);
};
arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, [9, 10, 11], 12],
    [13, 14, 15],
];
n = 2;
console.log(flat(arr, n)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
