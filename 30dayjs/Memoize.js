function memoize(fn) {
    let saved = {};
    return function (a, b) {
        let key = `${a},${b}`;
        if (!saved[key]) {
            //lưu giá trị của key vào saved
            saved[key] = fn(a, b);
            console.log("Lưu giá trị key ", saved[key]);
            return saved[key];
        } else {
            //trả về giá trị đã lưu
            console.log("Lấy giá trị đã lưu: ", saved[key]);

            return saved[key];
        }
    };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1; // Tăng số lần gọi
    return a + b; // Trả về tổng của a và b
});

// Gọi hàm với (0, 0) hai lần
console.log(memoizedFn(1, 2), memoizedFn(2, 3), memoizedFn(1, 2), memoizedFn(2, 3), callCount, memoizedFn(3, 4), callCount); // Kết quả mong đợi: 0 0 1
