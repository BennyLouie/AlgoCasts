// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // 1) const str = n.toString()
    // if (str[0] === '-') {
    //     let sub = str.substring(1)
    //     let rev = sub.split('').reverse().join('')
    //     return parseInt(str[0] + rev)
    // }
    // return parseInt(str.split('').reverse().join(''))

    // 2)
    const rev = n.toString().split('').reverse().join('')
    return parseInt(rev) * Math.sign(n)
}

module.exports = reverseInt;
