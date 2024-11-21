// 0. create stop-watch (using objects)





/* 1. Understanding Objects (Objects, Object Literals)

- Create a basic object called person with properties like name, age, and job.
Write a function to print out these properties.
- Create multiple car objects using object literals with properties like brand, 
model, and year, and log them to the console.*/ 

const person = {
	name: 'Harry',
	age: 36,
	'job': 'Programmer',

	human() {
		console.log(`${this.name} is ${this.age} year\'s old and a ${this['job']} by profession`);
	}
}

person.human();


const car = {
	brand: 'Toyota',
	'model': 'Camry XLE',
	year: 2010,

	carType() {
		console.log(`i wish to get a ${this.brand} ${this['model']} ${this.year} before the end of the year`)
	}
}

car.carType();


/* 2. Factory Functions
- Write a factory function that creates a person object with properties name, age, and a method greet. 
Create several objects using this factory and call their greet method.*/

function persons(names, ages){
	return{
		names: names,
		ages: ages,
		greet(){
			console.log(`Hello ${this.names}, you\'re ${this.ages} years`)
		}
	}
}

const persons1 = persons('Thomas', 27);
const persons2 = persons('Calliou', 7);

persons1.greet();
persons2.greet();




/* 3. Constructor Functions
- Create a constructor function called Animal with properties species, age, and a method speak. 
Create multiple Animal objects and call their speak method. */

function AnimalSpecies (species, aged) {
	this.species = species;
	this.aged = aged;
	this.speak = function(sound){
		console.log(`This is a ${this.species} of aged ${this.aged} and it makes the sound ${sound}`)
	}
}

const dog = new AnimalSpecies('Dog', 10);
dog.speak('bark');

const cat = new AnimalSpecies('Cat', 3);
cat.speak('meow');

const snake = new AnimalSpecies('Snake', 12);
snake.speak('hiss');



/* 4. Constructor Property
	Create a constructor function Book with properties title, author, and year. 
	Add a method to the Book prototype called getSummary that logs a summary of the book. 
	Check the constructor property for any created objects.
*/ 
function BookLog(title, author){
	this.title = title;
	this.author = author;

	// prototype method a recommended approach (as against 'this' for method definitions that should be shared across all instances (it saves space in memory).
	BookLog.prototype.getSummary = function(summary){
		console.log(`${title} by ${author} : summary - ${summary}`)
	};

}

const book1 = new BookLog('1984', 'George Orwell');
book1.getSummary('A dystopian novel.');

const book2 = new BookLog('Brave New World', 'Aldous Huxley');
book2.getSummary('A novel about a dystopian future.');



/* 5.  Functions Are Objects (Classes)
	- Create a class Vehicle with properties like make, model, and year. 
	Add a method called start to log a message. Create a Vehicle object and 
	call the start method.
	- Implement the same Vehicle class using both constructor functions and 
	factory functions. Compare the syntax and functionality.*/

class Vehicle {
	constructor(make, model, year){
		this.make = make,
		this.model = model,
		this.year = year
	}
	start(){
		console.log(`your ${this.year} ${this.make} ${this.model} is starting... `)
	}
}

const bmw = new Vehicle('BMW', 'E35', 2002);
bmw.start();
const mercedes = new Vehicle('Mercedes Benz', 'S-Class', 2022);
mercedes.start();


//Constructor function
function Veh (make, model, year){
	this.make = make,
	this.model = model,
	this.year = year
	this.start = function(){
	console.log(`your ${this.year} ${this.make} ${this.model} is starting... `)
}
}

const honda = new Veh('Honda', 'Civic', 2008);
honda.start();

// Factpry Function
function Vehicles (make, model, year){
	return{
		make: make,
		model: model,
		year: year,
		starts(){
		console.log(`your ${this.year} ${this.make} ${this.model} is starting... `)
		}
	}
}

const peugeot = Vehicles('Peugeot', 504, 1975);
peugeot.starts();



/* 6. Value vs Reference Types
	- Create an object person1 and assign it to person2. Modify person2 and observe what happens to person1. 
	Explain how reference types work in this case. */

const human1 = { name: 'Big Head', age: 27}
const human2 = human1

human2.name = 'Ori Ede'
console.log(human2);
console.log(human1);



/* 7. Enumerating Properties
	- Using a loop, enumerate over all properties of an object movie 
	(with properties like title, director, year) and log the property names and values.*/

const movie = {
	title: 'Die Hard',
	director: 'James Bond',
	Year: 2009
}

for (keys in movie){
	console.log(`${keys}: ${movie[keys]}`)
}



/*Abstraction
	- Refactor the Person class by adding private methods to handle internal logic 
	(e.g., calculating age from a birth year), while exposing only necessary functionality to the outside.
	- Implement a class for Account with private properties balance and methods like deposit and withdraw. 
	Ensure that balance cannot be accessed or modified directly from outside the class.*/

