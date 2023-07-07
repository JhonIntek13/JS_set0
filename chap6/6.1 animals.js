// Animal object type
function Animal(name) {
  this.name = name;
}

Animal.prototype.displayInfo = function() {
  console.log(`This is ${this.name}.`);
};

// Mammal object type inheriting from Animal
function Mammal(name) {
  Animal.call(this, name);
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.sound = function() {
  console.log(`${this.name} makes a sound.`);
};

// Bird object type inheriting from Animal
function Bird(name) {
  Animal.call(this, name);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function() {
  console.log(`${this.name} can fly.`);
};


const lion = new Mammal("Lion");
lion.displayInfo(); 
lion.sound();

const eagle = new Bird("Eagle");
eagle.displayInfo(); 
eagle.fly(); 
