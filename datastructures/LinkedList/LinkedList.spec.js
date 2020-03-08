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
        it('returns null when the list is empty', () => {
            const list = new LinkedList();
            const elem = list.remove();
            expect(elem).to.equal(null);
        });

        it('retrieves and removes the head (first element) of this list', () => {
            const list = new LinkedList();
            list.add(10);
            expect(list.size()).to.equal(1);

            const elem = list.remove();
            expect(elem).to.equal(10);
            expect(list.size()).to.equal(0);

            const listOne = new LinkedList();
            listOne.add(10);
            listOne.add(11);
            expect(listOne.size()).to.equal(2);
            expect(listOne.remove()).to.equal(10);
            expect(listOne.size()).to.equal(1);
        });
    });

    describe('removeAll', () => {
        it('removes all instance of a value from the list when only one value exists', () => {
            const list = new LinkedList();
            list.add(10);
            list.removeAll(10);
            expect(list.size()).to.equal(0);
        });

        it('removes all instance of a value from the list', () => {
            const list = new LinkedList();
            list.add(10);
            list.add(11);
            list.add(12);
            list.add(11);
            list.removeAll(11);
            expect(list.size()).to.equal(2);

            const list2 = new LinkedList();
            list2.add(10);
            list2.add(10);
            list2.add(11);
            list2.add(10);
            list2.add(10);
            list2.removeAll(10);
            expect(list2.size()).to.equal(1);
        });

        it('can remove all values from the list', () => {
            const list = new LinkedList();
            list.add(9);
            list.add(9);
            list.add(9);
            list.removeAll(9);
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
        it('returns the number of items in the list', () => {
            const list = new LinkedList();
            list.add(10);
            list.add(11);
            list.add(12);
            list.add(12);
            list.add(12);
            list.add(12);
            list.add(13);
            expect(list.size()).to.equal(7);

            list.removeAll(10);
            list.removeAll(13);
            expect(list.size()).to.equal(5);
        });
    });
});
