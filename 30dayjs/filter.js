var filter = function (arr, fn) {
    return arr.filter((e, i) => fn(e, i));
};
console.log(
    filter([0, 10, 20, 30], function (v) {
        return v > 10;
    })
);
console.log(
    filter([1, 2, 3], function (v, i) {
        return i === 0;
    })
);
console.log(
    filter([-2, -1, 0, 1, 2], function (v) {
        return v + 1;
    })
);
