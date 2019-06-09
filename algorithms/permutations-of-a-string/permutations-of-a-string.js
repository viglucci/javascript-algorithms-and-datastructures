const permutations = (string) => {
    let finalPermutations = [];
    if (string.length) {
        const parts = string.split("");
        const subject = parts[parts.length - 1];
        parts.splice(parts.length - 1, 1);
        const existingPerms = permutations(parts.join(""));
        finalPermutations = [subject];
        if (existingPerms.length) {
            const currentPerms = [];
            for(let i = 0; i < existingPerms.length; i++) {
                const chars = existingPerms[i].split("");
                for (let j = 0; j < chars.length + 1; j++) {
                    const newChars = [...chars];
                    newChars.splice(j, 0, subject);
                    currentPerms.push(newChars.join(""));
                }
            }
            finalPermutations = currentPerms;
        }
    }
    return finalPermutations;
};

const perms = permutations("abcde").sort();

console.log(JSON.stringify(perms, null, 0));