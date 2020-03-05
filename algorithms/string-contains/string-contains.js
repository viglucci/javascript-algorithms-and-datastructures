import {expect} from 'chai';

const contains = (subject, search) => {
    if(!subject || !search) return false;
    if(search.length > subject.length) return false;

    let matches = 0;
    for (let i = 0; i < subject.length; i++) {
        let subjectCursor = i;
        for (let j = 0; j < search.length; j++) {
            if (subject.charAt(subjectCursor++) === search.charAt(j)) {
                matches += 1;
            } else {
                matches = 0;
            }
            if (matches === search.length) {
                return true;
            }
        }
    }

    return false;
};

describe('contains', () => {
    it('returns true or false depending if the string contains the other string', () => {
        expect(contains('', 'brown')).to.equal(false);
        expect(contains('quick brown fox', '')).to.equal(false);
        expect(contains('quick brown', 'quick brown fox')).to.equal(false);
        expect(contains('quick brown fox', 'brown')).to.equal(true);
        expect(contains('br o w n', 'brown')).to.equal(false);
        expect(contains('andre', 'kevin')).to.equal(false);
        expect(contains('aaabcd', 'aabc')).to.equal(true);
    });
});
