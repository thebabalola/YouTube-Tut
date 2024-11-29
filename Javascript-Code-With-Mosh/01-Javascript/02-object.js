/*procedural programming - used to be the default type of programming
	- Where programs are divided into a sort of function. it involves storing data 
	in a bunch of variables, which the functions then work on.
	(often called spaghetti code, because once a change is made to a function, the other inter connecting function might break.)
*/

let isName = 'twins';
function greet(){
	console.log(`good morning ${isName}!`);
}

greet();



/* ---Object Oriented Programming --- 
	A programming style/paradigm centered around objects rather than functions.

	4 pillars of object Oriented programming
	- Encapsulation 
	- Abstraction
	- Inheritance
	- Polymorphism

	in object oriented programming - we combine a group of relatable functions(f()) 
	and variables(x) into a unit.
	 . The variables - Properties
	 . The functions - Methods

*/

const obj = {
	'name': 'taiwo',
	age: 26,
	greetings(){
		console.log(`Hello ${this.name}, you are ${age} years old`);
	}
};

obj.greetings(); //calls the method




/*--- Encapsulation (grouping related variables and function in an object) ---*/
// procedural programming
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage (baseSalary, overtime, rate) {
return baseSalary + (overtime * rate);
}

//Object oriented programming(encapsulation of the above)
let employee = {
	baseSalary: 30_000,
	overtime: 10,
	rate: 20,
	getWage: function() {
		return this.baseSalary + (this.overtime * this.rate);
	}
};

employee.getWage();




/* --- Abstraction (Abstraction focuses on hiding the internal details and complexities 
of a system and exposing only the essential features or behaviors to the use) ---
		- simpler interface
		-reduces impact of change

		- Example: a DVD
*/
class Car {
	// Private method & properties (implementation hidden from the user)
	#startEngine() {
	  console.log("Engine started...");
	}
  
	// Public method (simplified interface)
	drive() {
	  this.#startEngine();
	  console.log("Car is driving...");
	}
  }
  
  // Usage
  const myCar = new Car();
  myCar.drive();  	// Output: Engine started... Car is driving...
  					// myCar.#startEngine(); // Error: Private field cannot be accessed

  


/* --- Inheritance (is a method that allows us to eliminate redundant codes)
	It allows one class (or constructor function) to acquire properties and methods of 
	another class. This enables code reuse, as the child class (also known as the subclass) 
	can inherit methods and properties from the parent class (or superclass), while also having 
	its own unique properties and methods.
*/
// Parent class (Superclass)
class Animal {
	constructor(name) {
	  this.name = name;
	}
  
	speak() {
	  console.log(`${this.name} makes a sound.`);
	}
  }
  
  // Child class (Subclass) inheriting from Animal
  class Dog extends Animal {
	constructor(name, breed) {
	  // Call the parent class constructor
	  super(name);
	  this.breed = breed;
	}
  
	bark() {
	  console.log(`${this.name}, the ${this.breed}, barks!`);
	}
  }
  
  const myDog = new Dog('Buddy', 'Golden Retriever');
  myDog.speak(); // Output: Buddy makes a sound.
  myDog.bark();  // Output: Buddy, the Golden Retriever, barks!
  



/* --- Polymorphism --- poly(many)	morphism(form)
  	A concept that allows objects of different classes to be treated as objects of a common superclass. 
	In JavaScript, polymorphism is achieved primarily through method overriding and method overloading.
 */
// Base class
class Animal {
	speak() {
	  console.log("The animal makes a sound");
	}
  }
  
  // Subclass Dog
  class Dog extends Animal {
	speak() {
	  console.log("Woof! Woof!");
	}
  }
  
  // Subclass Cat
  class Cat extends Animal {
	speak() {
	  console.log("Meow! Meow!");
	}
  }
  
  // Function that accepts an Animal type
  function makeAnimalSpeak(animal) {
	animal.speak(); // Calls the speak method of the specific animal instance
  }
  
  // Create instances of Dog and Cat
  const dog = new Dog();
  const cat = new Cat();
  
  // Polymorphism in action
  makeAnimalSpeak(dog); // Output: Woof! Woof!
  makeAnimalSpeak(cat); // Output: Meow! Meow!
  