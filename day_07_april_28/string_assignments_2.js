/*1. Print the occurence of each character in a string
   input: 'entertainment'
   output: { e:3 , n:2 , t: 3 ....} */
   console.log("Problem 1");

    function characterCount(str) {
        let count = {};
        for (let char of str) {
          if (count[char]) {
            count[char] += 1;
          } else {
            count[char] = 1;
          }
        }
      
        for (let char in count) {
          console.log(`${char}: ${count[char]}`);
        }
      }
      characterCount('entertainment');

      console.log("------------------------")
/*2. Print the character which is repeated max no of times
   input: 'hello world'
   output : 'L' */
   console.log("Problem 2");

   function maxRepeatedCharacter(str) {
    let count = {};
    let maxChar = '';
    let maxCount = 0;
  
    str = str.replace(/\s+/g, '');
    str.toLowerCase(); // Remove spaces and ignore case
  
    for (let char of str) {
      count[char] = (count[char] || 0) + 1;
      if (count[char] > maxCount) {
        maxChar = char;
        maxCount = count[char];
      }
    }
  
    console.log(maxChar.toUpperCase());
  }
  maxRepeatedCharacter('hello');

  console.log("------------------------")

  /*3. Swap The case for Each Character in a string 
   input: 'Hello World'
   output: 'hELLO wORLD' */
   console.log("Problem 3");

   function swapCase(str){
      str.s
      console.log(str);
   }
   swapCase("Hello World");

   console.log("------------------------")
   /*4. Print the Abbreviation for a string
   input: 'Rabindra Nath Tagore'
   output: 'R. N. tagore' */
   console.log("Problem 4");

   function printAbbreviation(str) {
    let words = str.trim().split(' '); // Split the string into words
    let result = '';
  
    for (let i = 0; i < words.length; i++) {
      if (i === words.length - 1) {
        // Last word: print full word in lowercase
        result += words[i].toLowerCase();
      } else {
        // First letter in uppercase + dot + space
        result += words[i][0].toUpperCase() + '. ';
      }
    }
  
    console.log(result);
  }

  printAbbreviation("Rabindra Nath Tagore")

  console.log("------------------------")
  /*5. Shift the characters by the next character, the output should have the next char of input
   input:  'abcxyz'
   output: 'bcdyza'*/
  console.log("Problem 5");

  function shiftCharacters(str) {
    let shifted = '';
  
    for (let char of str) {
      if (char === 'z') {
        shifted += 'a';
      } else if (char === 'Z') {
        shifted += 'A';
      } else {
        shifted += String.fromCharCode(char.charCodeAt(0) + 1);
      }
    }
  
    console.log(shifted);
  }
  shiftCharacters("abcxyz");

  console.log("------------------------")
  /*6. Ask user to enter a sequence of parantheses and validate 
   input: '([{ }])'
   output : true*/
  console.log("Problem 6");

  function isValidParentheses(str) {
    let stack = [];
    let map = {
      ')': '(',
      ']': '[',
      '}': '{'
    };
  
    for (let char of str) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.pop() !== map[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  isValidParentheses("([{ }])");

  console.log("------------------------")
  /*7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
    input: 'ABC'
    output: ABC , ACB , BCA, BAC ...*/
  console.log("Problem 7");

  function permute(str, answer = '') {
    if (str.length === 0) {
      console.log(answer);
      return;
    }
  
    for (let i = 0; i < str.length; i++) {
      let ch = str[i];
      let left = str.slice(0, i);
      let right = str.slice(i + 1);
      permute(left + right, answer + ch);
    }
  }
  permute("ABC")

  console.log("------------------------")
  /*8. Ask user to enter a number and convert that to Roman value
   input:   9    12
   output : IX   XII*/
  console.log("Problem 8");

  function intToRoman(num) {
    let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let syb = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  
    let roman = '';
    
    for (let i = 0; i < val.length; i++) {
      while (num >= val[i]) {
        roman += syb[i];
        num -= val[i];
      }
    }
  
    console.log(roman);
  }
  intToRoman(9);

  console.log("------------------------")
/* 9. Ask user to enter a roman string and convert that to integer value
   input:   IX    XII
   output : 9     12*/
console.log("Problem 9");

  function romanToInt(s) {
    let map = {
      'I': 1, 'V': 5, 'X': 10,
      'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };
  
    let num = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (i < s.length - 1 && map[s[i]] < map[s[i + 1]]) {
        num -= map[s[i]];
      } else {
        num += map[s[i]];
      }
    }
  
    console.log(num);
  }
  romanToInt("IX");
