// Challenge 3: Find Strings with Dollar Sign
// Write a function to find all strings that include a $ sign in the array.
function findDollarStrings (array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.includes ("$")) {
             result.push (element);
        }    
    }
    return result;
}

// Usage examples:
console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []