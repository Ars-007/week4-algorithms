// Challenge 9: Find the Longest Word in a String
// Write a function that returns the length of the longest word in the provided sentence.
function findLongestWord(str) {
    const words = str.split(' '); 
    let longestLength = 0;

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];

        if (currentWord.length > longestLength) {
            longestLength = currentWord.length; 
        }
    }

    return longestLength;
}

// Usage examples:
console.log(findLongestWord('The quick brown fox')); // 5
console.log(findLongestWord('Hello world')); // 5
console.log(findLongestWord('')); // 0
console.log(findLongestWord('OneWord')); // 7