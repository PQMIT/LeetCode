var chunk = function(arr, size) {
    var result = [];
    for (var i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
        console.log("result:", result," i:", i);
    }
    return result;
};
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));