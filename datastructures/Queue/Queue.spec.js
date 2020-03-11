import { expect } from 'chai';
import Queue from './Queue';

describe('Queue', () => {
    it('the first item pushed to the queue is the first item popped', () => {
        const queue = new Queue(16);

        queue.push(10);
        queue.push(20);
        queue.push(30);

        expect(queue.pop()).to.equal(10);
        expect(queue.pop()).to.equal(20);
        expect(queue.pop()).to.equal(30);
    });

    it('correctly tracks the size', () => {
        const queue = new Queue(16);

        queue.push(10);
        queue.push(20);
        queue.push(30);

        expect(queue.size()).to.equal(3);

        expect(queue.pop()).to.equal(10);
        expect(queue.size()).to.equal(2);

        expect(queue.pop()).to.equal(20);
        expect(queue.size()).to.equal(1);

        expect(queue.pop()).to.equal(30);
        expect(queue.size()).to.equal(0);
    });

    it('defaults the backing array to 8', () => {
        const queue = new Queue();
        expect(queue._items.length).to.equal(8);
    });

    it('initializes the backing array to the value of the given initial size', () => {
        const queue = new Queue(3);
        expect(queue._items.length).to.equal(3);
    });

    it('doubles the size of the backing array if a pushed item would insert into a index out of bounds', () => {
        const queue = new Queue(2);
        queue.push(10);
        queue.push(20);
        queue.push(30);
        expect(queue._items.length).to.equal(4);
    });
});
