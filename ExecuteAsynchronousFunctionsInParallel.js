var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        let count = 0; //Biến đếm số lượng hàm đã thực thi xong
        functions.forEach((fn, i) => {
            fn().then(res => {
                results[i] = res;
                count++; //Tăng biến đếm lên 1
                if (count === functions.length) {
                    resolve(results);
                }
            }).catch(reject);
        });
    });
};

const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]