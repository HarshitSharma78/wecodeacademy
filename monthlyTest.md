# --- MONTHLY - 2 - TEST -

## Question 1

Write a JavaScript program to check whether a string "Code" presents at 5th (index 4) position in a given string, if "Code" presents in the string return the string without "Code" otherwise return the original one.

```
function removeCode(str) {
  if (str.length <= 4 && str.substr(4, 4) === "Code") {
    return str.substr(0, 4) + str.substr(8);
  } else {
    return str;
  }
}

console.log(removeCode("HelloCodeWorld")); // Output: HelloWorld
console.log(removeCode("Hello World")); // Output: Hello World

```

## Question 2

Write a JavaScript program to capitalize the first letter of each word of a given string.

Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox'

```

function test(num) {
  let word = num.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
}
let string = "the quick brown fox";
let str = test(string);
console.log(str);

```

## Question 3

Write a JavaScript program to check whether all the digits in a given number are the same or not.

```
let str = [1, 2];
function test(num) {
  let word = num.toString().split("");
  for (let i = 1; i < word.length; i++) {
    if (word[i] !== word[0]) {
      return false;
    }
  }
  return true;
}
let number = 11111;
let sameno = test(number);
console.log(sameno);

```

## Question 4

Write a JavaScript function that reverse a number.

```
function test(num) {
  let reverse = parseInt(num.toString().split("").reverse().join(""));
  return reverse;
}
let number = 12345;
let reversNumber = test(number);
console.log(reversNumber);

```

## Question 5

Write a JavaScript function to extract unique characters from a string.

Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"

```

function test(num) {
  let chars = "";
  for (let i = 0; i < num.length; i++) {
    let char = num.charAt(i);
    if (chars.indexOf(char) === -1) {
      chars += char;
    }
  }
  return chars;
}

let str = "thequickbrownfoxjumpsoverthelazydog";
let unique = test(str);
console.log(unique);

```

## Question 6

Write a JavaScript function to chop a string into chunks of a given length. Test Data :

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]

```
function test(num, size = 1) {
  let chunks = [];
  let i = 0;
  while (i < num.length) {
    chunks.push(num.slice(i, i + size));
    i += size;
  }
  return chunks;
}
console.log(test("w3resource", 2));
console.log(test("w3resource", 3));


```

## Question 7

Write a JavaScript function to find a word within a string. Test Data :

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output :
"'fox' was found 1 times."
"'aa' was found 2 times."

```

function searchWord(str, word) {
  let words = str.split(" ");
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      count++;
    }
  }
  return word + " was found " + count + " times.";
}
console.log(searchWord("The quick brown  fox fox", "fox"));
console.log(searchWord("aa, bb, cc, dd, aa", "aa"));

```

## Question 8

Create an array of numbers. Now filter out all the numbers from the array where number is in between 30-50. After filtering the numbers, add 20 to each number and finally print the sum of all numbers using reduce function.

```


```

## Question 9

Convert below array

[[1,2], [3,4], [5,6], [7,8], [9,10]]
to
[3,7,11,15,19]

```
let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  let inArr = arr[i];
  let sum = inArr[0] + inArr[1];
  newArr.push(sum);
}
console.log(newArr);


```

## Question 10

Print below pattern

```
1 2 3 4 5
 2 3 4 5
  3 4 5
   4 5
    5
```

```

```
