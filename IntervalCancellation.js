var cancellable = (fn, args, t) => {
    fn(...args);
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);
    return () => clearInterval(intervalId);
};
