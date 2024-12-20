var arr = [1, 0, 2, 3, 0, 4, 5, 0];
var duplicateZeros = function (arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === 0) {
            arr.splice(i, 1, 0, 0);
            arr.pop();
            i++;
        }
        i++;
    }
    return arr;
};
console.log(duplicateZeros(arr)); // [1, 0, 0, 2, 3, 0, 0, 4]
