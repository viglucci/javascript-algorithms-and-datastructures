import { expect } from 'chai';

const fib = (n) => {
    if (n === 0 || n === 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};

const fib2 = (n, memo) => {
    if (!memo) {
        memo = {};
    }

    if (n === 0 || n === 1) {
        return n;
    }

    let aKey = n - 1;
    let bKey = n - 2;

    let a = memo[aKey];
    if (!a) {
        a = fib2(aKey, memo);
        memo[aKey] = a;
    }

    let b = memo[bKey];
    if (!b) {
        b = fib2(bKey, memo);
        memo[bKey] = b;
    }

    return a + b;
};

const fib3 = (n) => {

    if (n === 0 || n === 1)
        return n;

    let cursorBack = 0;
    let cursorFront = 1;

    let f = 0;
    for (let i = 0; i < n - 1; i++) {
        f = cursorBack + cursorFront;
        cursorBack = cursorFront;
        cursorFront = f;
    }

    return f;
};

describe('fib', () => {
    it('fib', () => {
        expect(fib(0)).to.equal(0);
        expect(fib(1)).to.equal(1);
        expect(fib(9)).to.equal(34);
    });

    it('fib2', () => {
        expect(fib2(0)).to.equal(0);
        expect(fib2(1)).to.equal(1);
        expect(fib2(9)).to.equal(34);
    });

    it('fib3', () => {
        expect(fib3(0)).to.equal(0);
        expect(fib3(1)).to.equal(1);
        expect(fib3(9)).to.equal(34);
    });
});
