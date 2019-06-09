const contains = (subject, search) => {
    const subjectChars = subject.split("");
    const searchLength = search.length;
    const firstSearchChar = search.split("")[0];
    return subjectChars.some((char, i) => {
        if (char == firstSearchChar) {
            const potentialMatchChars = subjectChars.slice(i, i + searchLength);
            const potentialMatchString = potentialMatchChars.join("");
            if (potentialMatchString === search) {
                return true;
            }
        }
    });
};

console.log(contains("quick brown fox", "brown")); // true
console.log(contains("br o w n", "brown")); // false
console.log(contains("andre", "kevin")); // false
console.log(contains("aaabcd", "aabc")); // true
