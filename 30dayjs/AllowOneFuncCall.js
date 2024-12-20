var once = (fn) => {
    // let called = false;
    return (...args) => {
        if (fn) {
            let result = fn(...args);
            fn = null;
            return result;
        }
        return undefined;
    };
};

// Example usage
let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined
