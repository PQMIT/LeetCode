var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise(function (resolve, reject) {
            var timeoutId = setTimeout(function () {
                reject("Time Limit Exceeded");
            }, t);
            fn(...args)
                .then(function (result) {
                    clearTimeout(timeoutId);
                    resolve(result);
                })
                .catch(function (err) {
                    clearTimeout(timeoutId);
                    reject(err);
                });
        });
    };
};
