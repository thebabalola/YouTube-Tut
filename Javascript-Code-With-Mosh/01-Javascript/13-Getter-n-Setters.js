const person = {
	firstName: 'Mosh',
	lastName: 'Hamedani',
	// fullName: function() {} or function fullName() {}
	fullName() {
		return `${person.firstName} ${person.lastName}`
	}
};

console.log(person.fullName()); //printing using normal function



/* Getters n Setters
	Getters = used to access properties in an object
	Setters = used to change(mutate) them 
*/

const dog = {
	firstName: 'Murphy',
	lastName: 'Smartie',

	// using getters
	get fullName() {
		return `${dog.firstName} ${dog.lastName}`
	},

	//using setters (to set fullName from outside)
	set fullName( valueFullName) {
		const parts = valueFullName.split(' ');
		this.firstName = parts[0];
		this.lastName = parts [1];
	}
};

console.log(dog.fullName); //access property using getter, from inside

dog.fullName = 'Dino Gobarchev'; // sets 'dino gobarchev' to the dog property, from outside
console.log(dog)