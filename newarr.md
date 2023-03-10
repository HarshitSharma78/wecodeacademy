# - ARRAY test - 1

- Q..1.Create an array with three elements and print out the second element.

```
let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 2);
console.log(newArr);
```

- Q..2.Create an array with five elements and print out the length of the array.

```
let arr = [14, 25, 34, 42, 53];
let newArr = arr.length;
console.log(newArr);
```

- Q..3.Create an array with four elements and print out each element using a for loop.

```
let arr = [3, 2, 5, 8];
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}
```

- Q..4.Create an array with six elements and print out each element using a forEach loop.

```
let myArray = [1, 2, 3, 4, 5, 6];

myArray.forEach(function (element) {
  console.log(element);
});
```

- Q..5.Create an array with three elements and add a fourth element to the end of the array.

```
let arr = [1, 2, 3, 4];
arr.push(6);
console.log(arr);
```

- Q..6.Create an array with four elements and remove the second element.

```
let arr = [2, 4, 3, 6];
arr.splice(1, 1);
console.log(arr);
```

- Q..7.Create an array with five elements and remove the last element.

```
let arr = [3, 7, 6, 4, 2];
arr.pop();
console.log(arr);
```

- Q..8.Create an array with three elements and check if the array includes a specific value.

```
let arr = [1, 2, 3];
let newArr = arr.includes(2);
console.log(newArr);
```

- Q..9.Create an array with four elements and sort the array in ascending order.

```
let arr = [1, 4, 7, 2];
let newArr = arr.sort(test);
function test(a, b) {
  return b - a;
}
console.log(newArr);
```

- Q..10.Create an array with five elements and sort the array in descending order.

```
let arr = [1, 4, 7, 2];
let newArr = arr.sort(test);
function test(a, b) {
  return a - b;
}
console.log(newArr);
```

- Q..11.Create two arrays, concatenate them and print out the resulting array.

```
let arr = [1, 2, 3, 4, 5];
let arr1 = [6, 7, 8, 9, 10];
let newArr = arr.concat(arr1);
console.log(newArr);
```

- Q..12.Create an array with three elements and convert it to a string.

```
let arr = ["harshit", 2, 3];
let newArr = arr.toString();
console.log(newArr);
```

- Q..13.Create an array with four elements and reverse the order of the elements.

```
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.reverse();
console.log(arr);
```

- Q..14.Create an array with five elements and find the index of a specific value.

```
let arr = [10, 20, 30, 40, 50];
arr.indexOf();
console.log(arr);
```

- Q..15.Create an array with six elements and slice the array to create a new array with the first three elements.

```
let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.slice(0, 3);
console.log(newArr);
```

- Q..16.Create an array with six elements and use the map method to double each element.

```
let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.map(test);
function test(num) {
  return num * 2;
}
console.log(newArr);
```

- Q..17.Create an array with four elements and use the while loop to calculate the sum of all elements.

```
let i = 0;
let arr = [3, 4, 56, 7];
let sum = 0;
while (i < arr.length) {
  sum = sum + arr[i];
  i++;
}
console.log(sum);
```

- Q..18.Create an array with five elements and use the filter method to return only the even numbers.

```
let arr = [1, 2, 3, 4, 5];
let newArr = arr.filter(test);
function test(num) {
  return num % 2 === 0;
}
console.log(newArr);
```

- Q..19.Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.

```
let arr = [1, 3, 5];
let newArr = arr.join("-");
console.log(newArr);
```

- Q..20.Create two arrays with three elements each and use the concat method to combine them into a new array.

```
let arr = [1, 2, 3];
let arr1 = [4, 5, 6];
let newArr = arr.concat(arr1);
console.log(newArr);
```
