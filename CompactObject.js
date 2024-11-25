var compactObject = function (obj) {
    const compObj = {};
    let objType = typeof obj === "object" && !Array.isArray(obj) && obj !== null;
    Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (value !== null && value !== undefined && value !== false && value !== 0 && value !== "") {
            compObj[key] = value;
            value === Object(value) && (compObj[key] = compactObject(value));
        }
    });
    if (objType) {
        return compObj;
    } else {
        return Object.values(compObj);
    }
};
obj = [null, 0, false, 1];
obj2 = { a: null, b: [false, 1] };
obj3 = [null, 0, 5, [0], [false, 16]];
obj4 = [1, 3, 634, 326, 4334, 0, 223, 3, "", 0, [0]];
console.log(compactObject(obj));
console.log(compactObject(obj2));
console.log(compactObject(obj3));
console.log(compactObject(obj4));
