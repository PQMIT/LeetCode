class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        this.events.get(eventName).push(callback);

        return {
            unsubscribe: () => {
                if (this.events.get(eventName).indexOf(callback) !== -1) {
                    this.events.get(eventName).splice(this.events.get(eventName).indexOf(callback), 1)
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return [];
        }
        let result = [];
        this.events.get(eventName).forEach((callback) => {
            result.push(callback(...args));
        });

        return result;
    }
}


// const emitter = new EventEmitter();

// // Subscribe to the onClick event with onClickCallback
// function onClickCallback() { return 99 }
// const sub = emitter.subscribe('onClick', onClickCallback);

// emitter.emit('onClick'); // [99]
// sub.unsubscribe(); // undefined
// emitter.emit('onClick'); // []
