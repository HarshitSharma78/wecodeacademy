# ARRAY TEST...

## Question 1.

Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

```
let fruits = ["apple", "banana", "orange"];
let arr = fruits.includes("banana");
console.log(arr);
```

## Question 2.

Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

### even

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function test(arr) {
  let arr1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr1 += arr[i];
    }
  }

  return arr1;
}
console.log(test(arr));
```

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = arr.filter(test);
function test(num) {
  return num % 2 === 0;
}
let ans = newArr.reduce(sum, 0);
function sum(total, value) {
  return total + value;
}
console.log(ans);
```

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let value of arr) {
  if (value % 2 === 0) {
    sum = sum + value;
  }
}
console.log(sum);
```

### odd.

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function test(num) {
  let arr1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num[i] % 2 === 1) {
      arr1 += num[i];
    }
  }
  return arr1;
}
console.log(test(arr));
```

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr1 = arr.filter(test);
function test(num) {
  return num % 2 === 1;
}
let ans = arr1.reduce(sum, 0);
function sum(total, value) {
  return total + value;
}
console.log(ans);
```

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let value of arr) {
  if (value % 2 === 1) {
    sum = sum + value;
  }
}
console.log(sum);

```

## Question 3.

Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.

```
let arr = [1, 2, 3, 4, 5];
let arr1 = [6, 7, 8, 1, 2, 3, 4];
let ans = new Set([...arr, ...arr1]);
console.log(ans);

```

```
function uniqueElements(array1, array2) {
  let unique = [...new Set([...array1, ...array2])];
  return unique;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

let resultArray = uniqueElements(array1, array2);
console.log(resultArray);
```

### ----------TOTEL------NUMBER--AAA---JAYEGE---

```
function all(array1, array2) {
  let allArray = [...array1, ...array2];
  return allArray;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

let result = all(array1, array2);
console.log(result);

```

## Question 4.

Given an array of strings, write a function that returns the longest string in the array.

```
let arr = ["wecode", "academy", "name"];
function test(num) {
  let ans = num[0];
  for (let value of arr) {
    if (value.length > ans.length) {
      ans = value;
    }
  }
  return ans;
}
console.log(test(arr));
```

```
let arr = ["wecode", "academy", "name"];
function test(num) {
  let ans = [0];
  for (let i = 0; i < num.length; i++) {
    if (num[i].length > ans.length) {
      ans = num[i];
    }
  }
  return [ans];
}
console.log(test(arr));
```

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

## Question 5.

Write a function that takes an array of numbers and returns the largest number in the array.

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
function test(num) {
  let ans = [];
  for (let value of arr) {
    if (value > ans) {
      ans = value;
    }
  }
  return ans;
}
console.log(test(arr));
```

```

let arr = [1, 2, 3, 4, 5, 6, 7];
function test(num) {
  let ans = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > ans) {
      ans = num[i];
    }
  }
  return ans;
}
console.log(test(arr));

```

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

## Question 6.

Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function test(num) {
  let newArr = [];
  for (let value of arr) {
    if (value % 2 === 0) {
      newArr.push(value);
    }
  }
  return newArr;
}
console.log(test(arr));
```

```
let arr = [1, 2, 3, 4, 5, 6, 7];
function test(num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (num[i] % 2 === 0) {
      newArr.push(num[i]);
    }
  }
  return newArr;
}
console.log(test(arr));

```

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

## Question 7.

Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.

```

let arr = ["harshit", "devender", "ajeet"];
function test(num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (num[i].length > 5) {
      newArr.push(num[i]);
    }
  }
  return newArr;
}
console.log(test(arr));
```

```
let arr = ["harshit", "sharma", "devender", "ajeet"];
function test(num) {
  let newArr = [];
  for (let value of arr) {
    if (value.length > 5) {
      newArr.push(value);
    }
  }
  return newArr;
}
console.log(test(arr));
```

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

## Question 8.

Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).

```
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7, 1, 2];
function test(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}
let total = test(array1, array2);
console.log(total);
```

```
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 2, 3, 1, 4];
function test(arr1, arr2) {
  let newArr = [];
  for (let value of arr1) {
    if (arr2.includes(value)) {
      newArr.push(value);
    }
  }
  return newArr;
}
let ans = test(arr1, arr2);
console.log(ans);
```

## Question 9.

Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

```

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let ans = arr.map(test);
function test(num) {
  return num * num;
}
console.log(ans);
```

```
let arr = [1, 2, 3, 4, 5, 6];

function test(num) {
  let ans = [];
  for (let i = 0; i < num.length; i++) {
    ans.push(num[i] * num[i]);
  }
  return ans;
}
console.log(test(arr));
```

```
let arr = [1, 2, 3, 4, 5, 6];
function test(num) {
  let ans = [];
  for (let value of num) {
    ans.push(value * value);
  }
  return ans;
}
console.log(test(arr));
```

## Question 10.

Write a function that takes an array of numbers and returns the average of all the numbers in the array.

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let ans = arr.reduce(sum, 0);
function sum(total, num) {
  return total + num;
}
console.log(ans / arr.length)
```

```
function arrayAverage(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let average = sum / array.length;

  return average;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let result = arrayAverage(array);
console.log(result);
```
