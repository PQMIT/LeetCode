var compose = (functions) => (x) => functions.reduceRight((acc, fn) => fn(acc), x);

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));
