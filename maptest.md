# MAP TEST

## Question 1

- Create a new Map and add key-value pairs to it.

```

let map = new Map();
map.set("harshit", 20);
map.set("devender", 19);
map.set("ajeet", 21);
console.log(map);

```

## Question 2

- Get the value of a specific key in a Map.

```

let map = new Map();
map.set(20, "harshit");
console.log(map.get(20));

```

## Question 3

- Check if a key exists in a Map.

```

let map = new Map();
map.set(1, "ajeet");
map.set(2, "harshit");
console.log(map.has(2));

```

## Question 4

- Iterate over the keys of a Map using a for...of loop.

```

let map = new Map();
map.set("harshit", 20);
map.set("devender", 19);
map.set("ajeet", 21);
for (let key of map.keys()) {
  console.log(key);
}

```

## Question 5

- Iterate over the values of a Map using a for...of loop.

```

let map = new Map();
map.set("harshit", 222);
map.set("ajeet", 333);
for (let value of map.values()) {
  console.log(value);
}

```

## Question 6

- Iterate over the key-value pairs of a Map using a for...of loop.

```

let map = new Map();
map.set("harshit", 222);
map.set("ajeet", 333);
for (let keyvalue of map.entries()) {
  console.log(keyvalue);
}

```

## Question 7

- Convert a Map to an array of key-value pairs.

```

let map = new Map();
map.set("harshit", 333);
map.set("ajeet", 444);
for (let value of map) {
  console.log(value[0], value[1]);
}

```

## Question 8

- Convert an array of key-value pairs to a Map.

```

let map = ["harshit", 222, "bitu", 555];
let newMap = new Map();
map.forEach(test);
function test(value, key) {
  newMap.set(value, key);
}
console.log(newMap);

```

## Question 9

- Use the forEach() method to iterate over the key-value pairs of a Map.

```

let map = new Map();
map.set("harshit", 333);
map.set("ajeet", 444);
map.forEach(test);
function test(value, keys) {
  console.log(value, keys);
}

```

## Question 10

- Use the Map keys() method to get an iterator for the keys of a Map.

```

let map = new Map();
map.set("harshit", 333);
map.set("ajeet", 444);
let newMap = map.keys();
for (let value of newMap) {
  console.log(value);
}

```

## Question 11

- Use the Map values() method to get an iterator for the values of a Map.

```

let map = new Map();
map.set("harshit", 333);
map.set("ajeet", 444);
let newMap = map.values();
for (let value of newMap) {
  console.log(value);
}

```

## Question 12

- Use the Map entries() method to get an iterator for the key-value pairs of a Map.

```

let map = new Map();
map.set("harshit", 222);
map.set("sharma", 555);
let newMap = map.entries();
for (let value of newMap) {
  console.log(value);
}

```

## Question 13

- Use the Map has() method to check if a Map contains a key.

```

let map = new Map();
map.set(222, "harshit");
map.set(555, "sharma");
let newMap = map.has(222);
console.log(newMap);

```

## Question 14

- Use the Map get() method to get the value associated with a key in a Map.

```

let map = new Map();
map.set("harshit", 222);
map.set("sharma", 5555);
let newMap = map.get("harshit");
console.log(newMap);

```

## Question 15

- Use the Map set() method to add a new key-value pair to a Map.

```

let map = new Map();
map.set("naam", "harshit");
let newMap = map.get("naam");
console.log(newMap);

```

## Question 16

- Use the Map delete() method to remove a key-value pair from a Map.

```

let map = new Map();
map.set("naam", "harshit");
map.set("nomber", 7877488226);
let newMap = map.delete("naam");
console.log(newMap);
console.log(map);

```

## Question 17

- Use the Map clear() method to remove all key-value pairs from a Map.

```

let map = new Map();
map.set("naam", "harshit");
map.set("nomber", 7877488226);
let newMap = map.clear;
console.log(newMap);

```

## Question 18

- Use the Object.fromEntries() method to create a new object from a Map.

```

let map = new Map([
  ["name", "harshit"],
  ["mobile", 7877488226],
]);

let newMap = Object.fromEntries(map);
console.log(newMap);

```

## Question 19

- Use the Map constructor to create a new Map from an array of key-value pairs.

```

let arr = [
  ["harshit", "sharma"],
  ["mobile", 7877488226],
];
let newMap = new Map(arr);
console.log(newMap);

```
