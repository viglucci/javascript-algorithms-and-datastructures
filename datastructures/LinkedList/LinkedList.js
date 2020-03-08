class Node {
    constructor(value) {
        this._value = value;
        this._next = null;
    }

    next() {
        return this._next;
    }

    value() {
        return this._value;
    }
}

class LinkedList {

    constructor() {
        this._head = null;
        this._size = 0;
    }

    /**
     * Appends the specified element to the end of this list.
     * @param {any} value
     */
    add(value) {
        if (this._head === null) {
            this._head = new Node(value);
        } else {
            const newNode = new Node(value);
            let head = this._head;
            while (head._next) {
                head = head._next;
            }
            head._next = newNode;
        }
        this._size++;
    }

    /**
     * Removes all occurrences of the value from the list.
     * @param value
     * @param comparator
     * @returns void
     */
    removeAll(value, comparator) {

        if (!comparator) {
            comparator = (a, b) => a === b;
        }

        let head = this._head;

        while(head && comparator(head.value(), value)) {
            head = head.next();
            this._head = head;
        }

        while(head) {
            const next = head.next();
            if (next && comparator(next.value(), value)) {
                head._next = next.next();
            } else {
                head = next;
            }
        }
    }

    /**
     * Returns true if this list contains the specified element
     * @param value
     * @param comparator
     * @returns {boolean}
     */
    contains(value, comparator) {

        if (!this._head) {
            return false;
        }

        if (!comparator) {
            comparator = (a, b) => a === b;
        }

        let head = null;
        do {
            if (!head) {
                head = this._head;
            }
            const headValue = head.value();
            const matches = comparator(headValue, value);
            if (matches) {
                return true;
            }
            head = head._next;
        } while (head);

        return false;
    }

    /**
     * Returns the number of elements in this list.
     * @returns {number}
     */
    size() {
        let size = 0;
        let head = this._head;
        while (head) {
            size++;
            head = head._next;
        }
        return size;
    }
}

export default LinkedList;
