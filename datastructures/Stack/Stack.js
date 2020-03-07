class Stack {

    constructor(initialSize) {
        this._items = new Array(initialSize || 8);
        this._cursor = 0;
    }

    push(item) {
        if (this._cursor === this._items.length) {
            this._copyArray();
        }
        this._items[this._cursor] = item;
        this._cursor++;
    }

    pop() {
        const index = this._cursor !== 0 ? this._cursor - 1 : this._cursor;
        const item = this._items[index];
        if (this._cursor !== 0) {
            this._cursor--;
        }
        return item;
    }

    peek() {
        const index = this._cursor !== 0 ? this._cursor - 1 : this._cursor;
        return this._items[index];
    }

    size() {
        return this._cursor;
    }

    _copyArray() {
        let newItems = new Array(this._items.length * 2);
        for(let i = 0; i < this._items.length; i++) {
            newItems[i] = this._items[i];
        }
        this._items = newItems;
    }
}

export default Stack;
