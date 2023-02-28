# function array test --

- 1. Function ko 1 number pass krna hai. jo number pass kia hai us number ki table print krni hai. for example 5
     5*1=5
     5*2=10

```

function teble(number, i = 1) {
  if (i == 11) return;
  console.log(number + " * " + i + " = " + number * i);
  i++;
  teble(number, i);
}
let number = 5;
teble(number);

```

- 2. Function ko 2 numbers pass krne hai. Numbers ko multiply krna hai

```

function teble(number, i) {
  console.log(number * i);
}
teble(2, 2);

```

- 3. Function ko array bnana hai and array ke sare numbers ko print krna hai

```
var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
a.forEach(function (entry) {
  console.log(entry);
});

```

- 4. Function bnana hai. Function me ek value leni hai. agar value true hai to Yes print kro otherwise No print kro

```
function value(a) {
  let b = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  for (let i = 0; i <= b.length - 1; i++) {
    if (a == [i]) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
}
value(1);

```

- 5. Function bnana hai. Function ko 2 numbers pass krne hai min and max. for example 10 and 20 to tume 10 se leke 20 tak print krvana hai

```
function num(a, b) {
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
}
num(10, 20);

```

- 6. function bnana hai. Function ko 1 number pass krna hai. 0 se leke us number tak jitne b Odd numbers hai vo print krne hai.

```

function num(a) {
  let str = "";

  for (let i = a; i > 0; i--) {
    if (i % 2 === 0) {
      str = i;
    }
    console.log(str);
  }
}
num(10);

```

- 7. function bnana hai. Function ko 1 number pass krna hai. 0 se leke us number tak jitne b Even numbers hai vo print krne hai.

```
function even(a) {
  let str = "";
  for (let i = a; i > 0; i--) {
    if (i % 2 === 1) {
      str = i;
    }
    console.log(str);
  }
}
even(15);

```

- 8. Ek function bnana hai. Is function ko 2 number pas krne hai. phla number ek number hoga aur dusra number maximum number hoga. fir hume phle number ke multiples max number tak print krne hai.for example: 5, 100 5 10 15 20 25...... 100

```

function multimax(a, b) {
  for (let i = 1; i <= b; i++) {
    if (a * i > b) {
    } else {
      console.log(a * i);
    }
  }
  for (i = a; i <= b; i++) {
    console.log(i);
  }
}
multimax(5, 100);

```
