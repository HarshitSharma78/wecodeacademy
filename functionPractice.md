# TEST

## Question 1.

### Write a function that uses the call method to print the name of an object.

```

let obj = {
  name: "harshit sharma",
  class: "3 year",
  city: "jaipur",
};
function allDetal() {
  console.log(`
    my name is ${this.name} my class ${this.class} my city ${this.city}
    `);
}
allDetal.call(obj);

```

## Question 2.

### Write a function that uses the apply method to find the minimum value in an array of numbers.

```

let arr = [1, 2, 3, 44, 5, 6, 73, 8];
let minimum = arr[0];
function test(num) {
  for (let value of arr) {
    if (value < minimum) {
      minimum = value;
    }
  }
  console.log(minimum);
}
test.apply();

```

## Question 3.

### Write a function that uses the bind method to create a new function that always has a specific "this" value.

```

let obj = {
  name: "harshit",
};
function test() {
  console.log(`Hello ${this.name}`);
}
test.bind(obj)();

```

## Question 4.

### Write a function that uses the call method to add two numbers together.

```

let obj = {
  name: "harhit",
};
function test(a, b) {
  console.log(a + b);
  console.log(`my name ${this.name}`);
}
test.call(obj, 20, 10);

```

## Question 5.

### Write a function that uses the apply method to concatenate two arrays.

```

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
function test() {
  console.log(arr1.concat(arr2));
}
test.apply();

```

## Question 6.

### Write a function that uses the bind method to create a new function that multiplies a number by a specified value.

```

let obj = {
  name: "harshit",
};
function test(a, b) {
  console.log(a * b);
  console.log(` my name is ${this.name} `);
}
test.bind(obj, 2)();

```

## Question 7.

### Write a function that uses the call method to find the length of a string.

```

let str = "hello dear frinds";
function test() {
  console.log(str.length);
}
test.call();

```

## Question 8.

### Write a function that uses the apply method to find the sum of all numbers in an array.

```

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let ans = 0;
function sum() {
  for (let value of arr) {
    ans = ans + value;
  }
  console.log(ans);
}
sum();

```

## Question 9.

### Write a function that uses the bind method to create a new function that logs a message with a specific prefix.

```

```

## Question 10.

### Write a function that uses the call method to convert a string to uppercase.

```

let str = "hello dosto";
function test() {
  console.log(str.toUpperCase());
}
test.call();

```
