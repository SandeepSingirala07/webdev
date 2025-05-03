// convert array of letters to array of words
const inputArr = [
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
];

let output = [];
let word = '';
for (char of inputArr) {
    if (char != '') {
        word = word + char;
    } else {
        output.push(word);
        word = '';
    }
}
output.push(word); // for last word
console.log(output)


// output = ['bake', 'cake', 'eat'];