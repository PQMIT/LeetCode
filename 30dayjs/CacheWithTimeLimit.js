var TimeLimitedCache = function () {
    this.cache = new Map();
};
TimeLimitedCache.prototype.set = function (key, value, duration) {
    if (this.cache.has(key)) {
        this.cache.set(key, { value: value, duration: Date.now() + duration });
        return true;
    }
    this.cache.set(key, { value: value, duration: Date.now() + duration });    
    return false;
};
TimeLimitedCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let value = this.cache.get(key);
        if (value.duration >= Date.now()) {
            return value.value;
        } else {
            this.cache.delete(key);
            return -1;
        }
    } else {
        return -1;
    }
};
TimeLimitedCache.prototype.count = function () {
    let count =0;
    for (let [key, value] of this.cache) {
        if (value.duration >= Date.now()) {
            count++;
        }
    }
    return count;
};


const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
