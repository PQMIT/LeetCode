var createCounter = function (init) {
    let val = init; // lưu giá trị ban đầu

    return {
        increment: function () {
            return ++init;
        },
        decrement: function () {
            return --init;
        },
        reset: function () {
            // đặt lại giá trị về ban đầu
            return (init = val);
        },
    };
};
const counter = createCounter(5);
console.log(counter.increment(), counter.increment(), counter.increment(), counter.reset(), counter.decrement(), counter.decrement());
