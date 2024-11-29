/* 
Class:
	- A class is a blueprint or template that defines the properties (attributes) and behaviors (methods) 
	that an object created from the class can have.
	- It doesn’t contain any real data; it’s just a definition or a blueprint.
	- You can create multiple objects (instances) from a single class.

Object:
	- An object is an instance of a class. It is created using the class blueprint and has actual values for the properties defined in the class.
	- Each object can have different values for the properties, even though they share the same methods and structure from the class.
	- Objects are the real entities that interact with each other in an application.

	classes is an ES6 update to constructor and factory function.
*/

//Class
class Car {
	constructor(make, model, year) {
	  this.make = make;
	  this.model = model;
	  this.year = year;
	}
  
	start() {
	  console.log(`${this.make} ${this.model} is starting...`);
	}
  }

// Object
const car1 = new Car('Toyota', 'Corolla', 2022);  // Object 1
const car2 = new Car('Honda', 'Civic', 2023);     // Object 2

car1.start();  // Output: Toyota Corolla is starting...
car2.start();  // Output: Honda Civic is starting...



/* Object Literals syntax (is a simple way to define an object) 
- it refers to has properties with in object within the curly braces */
const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1
	},
	draw: function(){
		console.log('draw');
	}
};

circle.draw();


/* Constructor & factory functions - are other ways to define an object.
	- very appropriate when working with a function with more than one method, regarded as behaviours
	(They can also be regarded as blueprints to creating objects, just like classes)
*/

// constructor function (exactly lika a class.)
function MyCar(make, model) {
    this.make = make;
    this.model = model;
    this.drive = function() {
        console.log(`Driving a ${this.make} ${this.model}`);
    };
}

const camry = new MyCar('Toyota', 'Camry');
const civic = new MyCar('Honda', 'Civic');

camry.drive(); // Output: Driving a Toyota Camry
civic.drive(); // Output: Driving a Honda Civic



//factory function (exactly like object - but with return and no new)
function createCar(make, model) {
    return {
        make: make,
        model: model,
        drive() {
            console.log(`Driving a ${this.make} ${this.model}`);
        }
    };
}

const toyota = createCar('Toyota', 'Camry');
const honda = createCar('Honda', 'Civic');

toyota.drive(); // Output: Driving a Toyota Camry
honda.drive(); // Output: Driving a Honda Civic




/* in Javascript every functions are objects.
	every method in javascript have a construtor property and that references the
	 function used in creating that method */

function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
}

/* const Circle1 = new Function('radius',`
	this.radius = radius;
	this.draw = function() {
	console.log('draw');
	}`
);
const Circle = new Circle1(1);
const another = new Circle(1);
*/
Circle.name; 
Circle.length;
Circle.constructor;

Circle.call({}, 1);
Circle.apply({}, [1,2,3]); 



// Values(Primitive) and Reference(Object)Types
/*	Value Types (also known as Primitive)
	-Numbers
	-Strings
	-Booleans
	-Symbols
	-Undefined
	-Null
	
	Reference Types (ES6)
	-  Objects
	- Functions
	- Arrays

	conclusion: 
	primitives are copied by their value.
	objects are copied by their reference(memory address).

*/
let x = {value: 10};	//object is not stored in x variable, it is stored in the memory. The memory address (1234) is then stored into x variable
let y = x;  //address refernce of x is stored into y (which is used to access the object)

let z= 35; //value is stored in variable y

console.log(z);
console.log(y); //(both x & y are pointing to the same object in memory)


//primitive
let num = 10;
function increase(number) {
	number++;
}
console.log(increase(num)); //outputs: 10

//reference
let obj = { value: 10 };
function increasenum(obj) {
	obj.value++;
}
increasenum(obj);
console.log(obj); //outputs: 11




// Adding and removing Properties (in objects)
function Circles(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
}

const newCircle = new Circles(10);  // an object, an instance of the above constructor

newCircle.location = {x: 1}; //adds a new property to the newCircle object
newCircle['size'] = 35.5  //adds a new property to the newCircle object
console.log(newCircle);

delete newCircle.location; //used to delete properties (like user password,card details) you dont want to send to clients
delete newCircle['size'];
console.log(newCircle);




// Enumerating(iterates) in Properties 
function Cir(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
}

const newCir = new Cir(7);

for (let key in newCir) {
	console.log(key, ); //outputs: only the key radius and draw
	console.log(key, newCir[key] );  //outputs: the keys and their values

	if(typeof newCir[key] !== 'function')
		console.log(key, newCir[key] ); //outputs: all properties except methods in the object
}


/* --- Abstraction --- (done that in object.js*/
function outerFunction() {
	let outerVariable = 'I am from the outer function';  //scopes
  
	function innerFunction() {
	  console.log(outerVariable); // closure - (Inner function accessing the outer function's variable)
	}
	return innerFunction;  // Returning the inner function
  }
  
  const closure = outerFunction();  // Call outerFunction and store the returned inner function
  closure();  // Output: 'I am from the outer function'
  



/* ---- Getters and Setters ----
	- Getters: Used to retrieve or "get" a property value (read only property). 
	You can add logic that runs when the property is accessed.
	- Setters: Used to modify or "set" a property value. 
	You can add validation or other logic before updating the property.
*/
class Circ {
	constructor(radius) {
	  this._radius = radius;
	}
	
	// Getter to access radius
	get radius() {
	  return this._radius;
	}
  
	// Setter to modify radius
	set radius(value) {
	  if (value <= 0) {
		console.log('Radius must be a positive number');
		return;
	  }
	  this._radius = value;
	}
  }
  
  const circ = new Circ(5);
  circ.radius = 10;  // Setting a new value using the setter
  console.log(circ.radius);  // Output: 10
  circ.radius = -2;  // Invalid value, Output: Radius must be a positive number
  