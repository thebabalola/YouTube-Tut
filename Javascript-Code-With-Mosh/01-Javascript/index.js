console.log('Hello ')

/* ---- Variables ---
Variables are used to store data temporaryily in a computers memory
*/

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

const savings = 25;


/* --- Types of Data Types ---
Primitive or Value Types - 
	- String
	- Number
	- Boolean
	- Null (just there until a user selects a color , then the null is changed to the value selected)
	- Undefined
Refernce or Modern - 
	- Object (an object is a data structure used to store key-value pairs where each key is associated with a value)
	- Arrays
	- Function
	- Symbol (came from ES6)
*/ 


/* ---- Dynamic and Static Programming languaue ---
 - Static language - when it variable are assigned it wouldnt be changed e.g C , Java
 - Dynamic language - it varaibles data type can be reassigned e.g javascript, python
 */


/* --- Object ---
	(an object is a data structure used to store key-value pairs where each key is associated with a value)
 */
let person = {
	name: 'Mosh',
	'age': 30
};

//Dot notation
person.name = 'Josh';
//Bracket notation (most useful when input type is uncertain)
person['age'] = '56';

console.log(person['age'])



/* --- Array ---
 Arrays are an Object or  data structure that stores different types of data
*/
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'grey';
console.log(typeof selectedColors);
console.log(selectedColors);



/* --- Function ---
	(a block of code and expression that performs a particular task )
*/
function greet(){
	return 'Hello Mosh'
}

greet();
console.log(greet());


function wishes(wish){
	console.log('i wish you an ' + wish)
}

wishes('Happy Birthday');