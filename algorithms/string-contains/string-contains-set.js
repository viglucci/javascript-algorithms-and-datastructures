const contains = (subject, search) => {
    const subjectChars = subject.split("");
    const searchLength = search.length;
    const firstSearchChar = sarch.split("")[0];
    return subject
        .split("")
        .map((subjectChar, i) => {
            if (subjectChar == firstSearchChar) {
                const potentialMatchChars = subjectChars.slice(i, i + searchLength);
                return potentialMatchChars.join("");
            }
        })
        .filter((potentialMatch) => {
            return potentialMatch === search;
        })
        .length > 0;
};

console.log(contains("quick brown fox", "brown")); // true
console.log(contains("br o w n", "brown")); // false
console.log(contains("andre", "kevin")); // false
console.log(contains("aaabcd", "aabc")); // true
