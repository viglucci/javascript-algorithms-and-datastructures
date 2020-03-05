import { expect } from 'chai';
import LinkedList from './LinkedList';

describe('LinkedList', () => {
    describe('add', () => {
        it('adds a value to the list', () => {
            const list = new LinkedList();
            list.add(10);
            list.add(11);
            list.add(12);
            expect(list.size()).to.equal(3);
        });
    });

    describe('remove', () => {
        it('removes all instance of a value from the list', () => {
            const list = new LinkedList();
            list.add(10);
            list.add(11);
            list.add(12);
            list.add(11);
            list.remove(11);
            expect(list.size()).to.equal(2);
        });

        it('can remove all values from the list', () => {
            const list = new LinkedList();
            list.add(9);
            list.add(9);
            list.add(9);
            list.remove(9);
            expect(list.size()).to.equal(0);
        });
    });

    describe('contains', () => {
        it('returns true when a value is present in the list', () => {
            const list = new LinkedList();
            list.add(10);
            list.add(11);
            list.add(12);
            expect(list.contains(11)).to.equal(true);
        });

        it('returns false when a value is not present in the list', () => {
            const list = new LinkedList();
            list.add(10);
            list.add(11);
            list.add(12);
            expect(list.contains(15)).to.equal(false);
        });
    });

    describe('size', () => {
        it('returns the number of items in teh list', () => {
            const list = new LinkedList();
            list.add(10);
            list.add(11);
            list.add(12);
            list.add(12);
            list.add(12);
            list.add(12);
            list.add(12);
            expect(list.size()).to.equal(7);
        });
    });
});
