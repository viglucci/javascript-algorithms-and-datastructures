import LinkedList from "../LinkedList/LinkedList";

class HashMap {
    _buckets = new Array(16);

    constructor() { }

    put(key, value) {
        const hash = this._hash(key);
        const index = this._index(hash);

        let list = this._buckets[index];
        if (!list) {
            list = new LinkedList();
            this._buckets[index] = list;
        }

        const nodeValue = {
            hash,
            key,
            value
        };

        const comparator = (a, b) => {
            const match = a.key === b.key;
            return match;
        };

        const contains = list.contains(nodeValue, comparator);
        if (contains) {
            list.remove(nodeValue, comparator);
        }
        list.add(nodeValue);
    }

    get(key) {
        if (key == null) {
            return null;
        }

        const hash = this._hash(key);
        const index = this._index(hash);

        const list = this._buckets[index];
        if (!list) {
            return null;
        }

        let head = list._head;
        if (!head) {
            return null;
        }

        while(head) {
            const value = head.value();
            if (value.key === key) {
                return value.value;
            }
            head = head.next();
        }

        return null;
    }

    size() {
        let itemCount = 0;

        this._buckets.forEach(bucket => {
            if (bucket) {
                itemCount += bucket.size();
            }
        });

        return itemCount;
    }

    _hash(key) {
        return key.charCodeAt(0);
    }

    _index(hash) {
        const len = this._buckets.length - 1;
        return hash & len;
    }
}

export default HashMap;
