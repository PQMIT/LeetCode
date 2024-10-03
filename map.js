var functionMap = function (arr, fn) {
    return arr.map((e, i) => fn(e, i));
};
console.log(
    functionMap([1, 2, 3], function (v) {
        return v + 1;
    })
);
console.log(
    functionMap([1, 2, 3], function (v, i) {
        return v + i;
    })
);
console.log(
    functionMap([10, 20, 30], function () {
        return 42;
    })
);
