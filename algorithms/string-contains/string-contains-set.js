import LinkedList from "../../datastructures/LinkedList/LinkedList";
import {expect} from "chai";

const contains = (subject, search) => {
    const subjectChars = subject.split("");
    const searchLength = search.length;
    const firstSearchChar = search.split("")[0];
    for (var i = 0; i < subjectChars.length; i++) {
        if (searchLength + i > subjectChars.length) {
            return false;
        }
        const char = subjectChars[i];
        if (char === firstSearchChar) {
            const potentialMatchChars = subjectChars.slice(i, i + searchLength);
            const potentialMatchString = potentialMatchChars.join("");
            if (potentialMatchString === search) {
                return true;
            }
        }
    }
};

describe('contains', () => {
    it('returns true or false depending if the string contains the other string', () => {
        expect(contains("quick brown fox", "brown")).to.equal(true);
        expect(contains("br o w n", "brown")).to.equal(false);
        expect(contains("andre", "kevin")).to.equal(false);
        expect(contains("aaabcd", "aabc")).to.equal(true);
    });
});
