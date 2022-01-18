// class Car {
// 	constructor(name, color, age) {
// 		this.name = name;
// 		this.color = color;
// 		this.age = age;
// 		// this.getColor = function () {
// 		// 	console.log(`Spalva - ${this.color}`);
// 		// };
// 	}
// 	getColor() {
// 		console.log(`Spalva - ${this.color}`);
// 	}
// }
// abstract
class Car {
	constructor(name, color, age) {
		if (this.constructor === Car) {
			throw new Error('Negalima iniciuoti abstrakcios klases');
		}
		let myage = age;
		this.name = name;
		this.color = color;
		const calcAge = function () {
			return myage + 10;
		};
		this.age = calcAge();
	}
	getColor() {
		console.log(`Spalva - ${this.color}`);
	}
}
// const car = new Car('BMW', 'black', 2010);
// console.log(car.getColor());

// paveldejimas

// class BMW extends Car {
// 	constructor(name, color, age, doorSize) {
// 		super(name, color, age);
// 		this.doorSize = doorSize;
// 	}
// }

//Poly
class BMW extends Car {
	constructor(name, color, age, doorSize) {
		super(name, color, age);
		this.doorSize = doorSize;
	}
	getColor() {
		return 'Tai yra kita funkcija';
	}
}
class Audi extends Car {
	constructor(name, color, age, doorSize) {
		super(name, color, age);
		this.doorSize = doorSize;
	}
}
const bmw = new BMW('car', 'black', 2006, 4);
const audi = new Audi('car', 'black', 2006, 4);
console.log(bmw.getColor());
console.log(audi.getColor());
