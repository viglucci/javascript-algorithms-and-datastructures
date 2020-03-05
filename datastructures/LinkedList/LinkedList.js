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
    }

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
    }

    remove(value, comparator) {
        let head = this._head;
        if (!head) {
            return;
        }

        if (!comparator) {
            comparator = (a, b) => a === b;
        }

        let previous = head;
        do {
            const _value = head.value();
            const matches = comparator(_value, value);
            if (matches && previous === head) {
                head = null;
                this._head = head;
            } else if (matches) {
                previous._next = head._next;
                head = head._next;
            } else  {
                previous = head;
                head = head._next;
            }
        } while(head);
    }

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
