// encapsulation
// const age = 15;
// const name = 'Vidmantas';
// function person(age, name) {}
// console.log(new Array());
// function Animal(name, age, color) {
// 	this.name = name;
// 	this.age = age;
// 	this.color = color;
// 	// this.getColor = function () {
// 	// 	console.log(`Spalva - ${this.color}`);
// 	// };
// }
// Animal.prototype.getColor = function () {
// 	console.log(`Spalva - ${this.color}`);
// };
// const animal = new Animal('dog', 25, 'black');
// const animal2 = new Animal('dog', 25, 'black');
// const animal3 = new Animal('dog', 25, 'black');
// const animal4 = new Animal('dog', 25, 'black');
// console.log(animal.getColor());

//Abstrakcija
// function Animal(name, age, color) {
// 	let myage = age;
// 	this.name = name;
// 	this.color = color;
// 	const calculateAge = function () {
// 		return myage + 10;
// 	};
// 	this.age = calculateAge();
// }
function Animal(name, age, color) {
	// if (this.constructor === Animal) {
	// 	throw new Error('Negalima iniciuoti abstrakcios klases');
	// }
	let myage = age;
	this.name = name;
	this.color = color;
	const calculateAge = function () {
		return myage + 10;
	};
	this.age = calculateAge();
}
Animal.prototype.testFunction = function () {
	return 'Tai testine funkcija';
};
// const animal = new Animal('Dog', 7, 'white');

//Paveldejimas

// function Cat(name, age, color, gender) {
// 	Animal.call(this, name, color, age);
// 	this.gender = gender;
// }
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

// Polimorfizmas
function Cat(name, age, color, gender) {
	Animal.call(this, name, color, age);
	this.gender = gender;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

//polymorfizmas
Cat.prototype.testFunction = function () {
	return `tai kita funkcija`;
};
const cat = new Cat('cat', 10, 'white', '');
console.log(cat.testFunction());
