class Queue {
    constructor(initialSize) {
        this._items = new Array(initialSize || 8);
        this._size = 0;
    }

    /**
     * Adds and item to the back of the Queue.
     * @param {any} item
     * @returns {void}
     */
    push(item) {
        const nextIndex = this._size;
        if (nextIndex + 1 > this._items.length) {
            const newArray = new Array(this._size * 2);
            for (let i = 0; i < this._items.length; i++) {
                newArray[i] = this._items.length;
            }
            this._items = newArray;
        }
        this._items[nextIndex] = item;
        this._size++;
    }

    /**
     * Retrieve the first item in the Queue.
     * @returns {any} item
     */
    pop() {
        if (this._size === 0) {
            return null;
        }
        const item = this._items[0];
        for (var i = 1; i < this._size; i++) {
            this._items[i - 1] = this._items[i];
        }
        this._size--;
        return item;
    }

    /**
     * Returns the number of items in the Queue.
     * @returns {number}
     */
    size() {
        return this._size;
    }
}

module.exports = Queue;
