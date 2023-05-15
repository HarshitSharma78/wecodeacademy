class Car {
  constructor(model, color) {
    this.mode = model;
    this.color = color;
  }
}
class Ford extends Car {
  constructor(name, color, cc, mileage, tyre) {
    super(name, color);
    this.cc = cc;
    this.mileage = mileage;
    this.tyre = tyre;
  }
}
class Maruti extends Car {
  constructor(name, color, cc, mileage, tyre) {
    super(name, color);
    this.cc = cc;
    this.mileage = mileage;
    this.tyre = tyre;
  }
}
const car = new Car(2000, "white");
const ford = new Ford(2000, "black", 3000, "11.3 KMPL", 4);
const maruti = new Maruti(2000, "red", 3000, "25.7 KMPl", 4);
console.log(Car, ford, maruti);

class Animal {
  constructor(name, color, legs) {
    this.name = name;
    this.color = color;
    this.legs = legs;
  }
}
class Dog extends Animal {
  constructor(name, color, legs) {
    super(name, color, legs);
  }
}
class Got extends Animal {
  constructor(name, color, legs) {
    super(name, color, legs);
  }
}
const animal = new Animal("Butterfly", "White", 4);
const dog = new Dog("Aakash", "Black", 4);
const got = new Got("Kitu", "Orange", 4);
console.log(animal, dog, got);
