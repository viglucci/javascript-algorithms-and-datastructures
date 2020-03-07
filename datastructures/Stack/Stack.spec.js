import { expect } from 'chai';
import Stack from './Stack';

describe('Stack', () => {
    describe('pop', () => {
        it('the last item pushed is the first item returned', () => {
            const stack = new Stack(16);

            stack.push(10);
            stack.push(20);
            stack.push(30);

            expect(stack.pop()).to.equal(30);
            expect(stack.pop()).to.equal(20);
            expect(stack.pop()).to.equal(10);
        });
    });

    describe('peek', () => {
        it('returns the value for the last item pushed to the stack but does not remove it', () => {
            const stack = new Stack(16);

            stack.push(10);
            stack.push(20);
            stack.push(30);

            expect(stack.peek()).to.equal(30);
            expect(stack.peek()).to.equal(30);
        });
    });

    describe('size', () => {
        it('correctly tracks the size', () => {
            const stack = new Stack(16);

            stack.push(10);
            stack.push(20);
            stack.push(30);

            expect(stack.size()).to.equal(3);

            expect(stack.pop()).to.equal(30);
            expect(stack.size()).to.equal(2);

            expect(stack.pop()).to.equal(20);
            expect(stack.size()).to.equal(1);

            expect(stack.pop()).to.equal(10);
            expect(stack.size()).to.equal(0);
        });
    });

    it('defaults the backing array to 8', () => {
        const stack = new Stack();
        expect(stack._items.length).to.equal(8);
    });

    it('initializes the backing array to the value of the given initial size', () => {
        const stack = new Stack(3);
        expect(stack._items.length).to.equal(3);
    });

    it('doubles the size of the backing array if a pushed item would insert into a index out of bounds', () => {
        const stack = new Stack(2);
        stack.push(10);
        stack.push(20);
        stack.push(30);
        expect(stack._items.length).to.equal(4);
    });
});
