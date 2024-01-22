function isPalindrome(word) {
    // Write your algorithm here
    const lowerCaseWord = word.toLowerCase()
    const reversedWord = lowerCaseWord.split('').toReversed().join('')
    let index = 0
    let checkIfPalindrome = true

    for (let letter of lowerCaseWord) {
        if (reversedWord[index] === letter) {
            index++
        } else {
            checkIfPalindrome = false
            break
        }
    }

    return checkIfPalindrome
}

/* 
  Add your pseudocode here

  Take a word and check if it spells the exact same way
  from right to left as it does from left to right,
  show that the word is a palindrome
*/

/*
  Add written explanation of your solution here

  Word is passed to the function,
  make the word lower case to standardize it and store it in a new variable,
  reverse the new word as it would be if read from right to left,
  compare both strings letter for letter,
  if any letter doesn't match return false and break out of the iterator,
  if all letters match, return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log('Expecting: true')
    console.log('=>', isPalindrome('racecar'))

    console.log('')

    console.log('Expecting: false')
    console.log('=>', isPalindrome('robot'))
}

module.exports = isPalindrome
