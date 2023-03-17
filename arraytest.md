# ARRAY TEST...

1. Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

```
let fruits = ["apple", "banana", "orange"];
let arr = fruits.includes("banana");
console.log(arr);
```

2. Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumOfEvenNumber(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumOfEvenNumber(arr));
```

3. Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.

```
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let uniqueArr = [];
function test(arr1, arr2) {
  let unique = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!unique.includes(arr1[i])) {
      unique.push(arr1[i]);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (!unique.includes(arr2[j])) {
      unique.push(arr2[j]);
    }
  }
  return unique;
}
console.log(test(arr1, arr2));
```

4. Given an array of strings, write a function that returns the longest string in the array.

```
let arr1 = ["apple", "banana", "kiwi", "orange", "pear"];
function test(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) longest = arr[i];
  }
  return longest;
}
console.log(test(arr1));
```

5. Write a function that takes an array of numbers and returns the largest number in the array.

```
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function test(arr) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr1[i];
    }
  }
  return largest;
}
console.log(test(arr1));
```

6. Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function test(num) {
  let even = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      even.push(num[i]);
    }
  }
  return even;
}
console.log(test(arr));
```

7. Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.

```
let arr = ["harshit", "ajeet", "devender", "bitu"];
function test(num) {
  let longest = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i].length >= 5) {
      longest.push(num[i]);
    }
  }
  return longest;
}
console.log(test(arr));
```
