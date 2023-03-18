# --- obj . test .

Que 1. What is an object in JavaScript?

```
object is the important feature in java script .  the object is use for binding  the properties and methods .and this properties and methods represent the simple entity.

```

Que 2. What is the difference between dot notation and bracket notation for accessing object properties?

```
let obj = {
  name: "harshit",
  age: 20,
};
console.log(obj.name);

let obj = {
  name: "harshit",
  age: 20,
};
console.log(obj["name"]);


```

Que 3. How do you loop through the properties of an object in JavaScript?

```
const obj = {
  name: "harshit",
  mobile: 7877488226,
  address: "jaipur",
};
let arr = Object.entries(obj);
for (let one of arr) {
  console.log(one);
}

```

Que 4. What is the difference between an object and an array in JavaScript?

```
- Array and Object both are using for store value's and data
for creating an array use [] square brackets
and for creating object use {} and key(variable) ,value's
array has functions to perform different type of tasks
object also have method and functions to perform specific tasks

```

Que 5. Write a JavaScript function to convert an object into a list of [key, value] pairs.

```

// let obj = {
//   name: "harshit",
//   mobile: 87687364887,
//   address: "jaipur",
// };
// console.log(Object.entries(obj));


```

Que 6. Write a function that takes an object representing a person and returns their full name.

```
let person = {
  firstName: "harshit",
  lastName: " sharma",
  fatherName: "purushotam",
  address: " jaipur",
};
console.log(
  "my name is " +
    person.firstName +
    person.lastName +
    "and my father name is " +
    person.fatherName +
    " I am from" +
    person.address
);

```

Que 7. Create an Object with your personal details. Now print all the keys of the object in ascending order.

```
// let obj = {
//   name: "John Doe",
//   age: 30,
//   nationality: "American",
//   occupation: "Software Engineer",
//   location: "California",
// };

// let sortedKeys = Object.keys(obj).sort();

// for (let key of sortedKeys) {
//   console.log(key);
// }

```

Que 8. Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.

```

```

Que 9. Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

```


```

Que 9. Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.

```

```
