import { expect } from 'chai';
import HashMap from './HashMap';

describe('HashMap', () => {
    describe('put', () => {
        it('calling put multiple times with the same key only inserts the value once', () => {
            const map = new HashMap();
            map.put('A', 10);
            map.put('A', 11);
            map.put('A', 12);
            expect(map.get('A')).to.equal(12);
        });
    });

    describe('get', () => {
        it('returns the value stored at a specified key', () => {
            const map = new HashMap();
            map.put('A', 10);
            map.put('B', 11);
            map.put('C', 12);
            expect(map.get('A')).to.equal(10);
            expect(map.get('B')).to.equal(11);
            expect(map.get('C')).to.equal(12);
        });
    });

    describe('size', () => {
        it('return 0 for a newly initialized instance', () => {
            const map = new HashMap();
            expect(map.size()).to.equal(0);
        });

        it('returns 3 when the map has 3 items added', () => {
            const map = new HashMap();
            map.put('A', 10);
            map.put('B', 11);
            map.put('C', 12);
            expect(map.size()).to.equal(3);
        });
    });
});
