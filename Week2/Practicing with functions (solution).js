/* Practicing with functions (solution)
Task 1 solution:

*/
function letterFinder(word, match) {

}
//Task 2 solution:
function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {

    }
}
//Task 3 solution:
function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {

        }
    }
}
//Task 4 solution:
function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        }
    }
}
//Task 5 solution:
function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
//Task 6 solution:
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")
/* 
Found the t at 0
---No match found at 1
---No match found at 2
Found the t at 3
*/
