// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let hash = {}
    for (let char of str) {
        hash[char] ? hash[char]++ : hash[char] = 1
        // hash[char] = hash[char] + 1 || 1 --> If the first is falsey, the value is 1
    }
    // 1) let max = Math.max(...Object.values(hash))
    // return Object.keys(hash).find(key => hash[key] === max)

    // 2)
    let max = 0
    let maxChar = ''
    for (let char in hash) {
        if (hash[char] > max) {
            max = hash[char]
            maxChar = char
        }
    }
    return maxChar
}

module.exports = maxChar;
