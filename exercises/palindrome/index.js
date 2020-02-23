// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // 1) const rev = str.split('').reverse().join('')
    // return rev === str
    
    // 2) let j = str.length - 1
    // for (let i = 0; i < Math.floor(str.length / 2); i++) {
    //     if (str[i] !== str[j]) {
    //         return false
    //     }
    //     j--
    // }
    // return true

    // 3) *Not the best since it does twice the work...
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

module.exports = palindrome;
