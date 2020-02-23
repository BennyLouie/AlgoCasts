// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // 1) return str.split('').reverse().join('')

    // 2) let reversed = []
    // let split = str.split('')
    // for (let i = 0; i < str.length; i++) {
    //     reversed.push(split.pop())
    // }
    // return reversed.join('')

    // 3) let reversed = ''
    // for (let char of str) {
    //     reversed = char + reversed
    // }
    // return reversed

    return str.split('').reduce((reversed, char) => char + reversed, '')
}

module.exports = reverse;
