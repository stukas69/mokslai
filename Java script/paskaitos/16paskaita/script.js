// const animal_name = 'Dog';
// const animal_age = 7;
// const animal_color = 'black';
// function getAnimalName(name) {
// 	return name;
// }

const animal = {
	name: 'Dog',
	age: 7,
	color: 'black',
	getAnimalAge: function () {
		return this.age;
	},
	//this nenaudojame su arrow func.
	// getAnimalColor: () => {
	// 	return animal.color;
	// },
	getAnimalName() {
		return this.name;
	},
};
// const arr = [true, 'Tekstas', 5];
const animalsArr = [
	{
		id: 1,
		name: 'Dog',
		age: 7,
		color: 'black',
		getAnimalAge: function () {
			return this.age;
		},
		getAnimalName() {
			return this.name;
		},
	},
	{
		id: 2,
		name: 'Cat',
		age: 2,
		color: 'white',
		getAnimalAge: function () {
			return this.age;
		},
		getAnimalName() {
			return this.name;
		},
	},
	{
		id: 3,
		name: 'Bird',
		age: 10,
		color: 'black',
		getAnimalAge: function () {
			return this.age;
		},
		getAnimalName() {
			return this.name;
		},
	},
	{
		id: 4,
		name: 'Leopard',
		age: 4,
		color: 'yellow',
		getAnimalAge: function () {
			return this.age;
		},
		getAnimalName() {
			return this.name;
		},
	},
];
//dinamiskai kuriamas objekto property
// animal.newDog = 'NewDog';
// animal['NewDog'] = 'NewDog';
// const countBlackAnimals = animalsArr.reduce((count, currValue) => {
// 	if (currValue.color === 'black') {
// 		count += 1;
// 	}
// 	return count;
// }, 0);
// const countBlackAnimals = animalsArr.reduce(
// 	(count, currValue) => (currValue.color === 'black' ? ++count : count),
// 	0
// );
// const countBlackAnimals = animalsArr.filter(
// 	(animal) => animal.color === 'black'
// ).length;
// const countBlackAnimals = animalsArr.filter((animal) => {
// 	if (animal.color === 'black') return true;
// 	else return false;
// });
// const filterAndSortAnimalColor = animalsArr
// 	.filter((animal) => animal.color === 'black')
// 	.sort((a, b) => a.name.localeCompare(b.name));
// const filterAndSortAnimalColor = animalsArr.filter(
// 	(animal) => animal.color === 'black'
// );
// filterAndSortAnimalColor.sort((a, b) => a.name.localeCompare(b.name));
// const filterAndSortAnimalColor = animalsArr
// 	.filter((animal) => animal.color === 'black')
// 	.sort((a, b) => a.name.localeCompare(b.name))
// 	.map((animal) => {
// 		// return { id: animal.id, name: animal.name };
// 		delete animal.age;
// 		return animal;
// 	});
// console.log(filterAndSortAnimalColor);

const animal2 = {
	name: 'Dog',
	age: 7,
	color: 'black',
	getAnimalAge: function () {
		return this.age;
	},
	getAnimalName() {
		return this.name;
	},
	eat() {
		return 'eat';
	},
};
const animal3 = {
	name: 'Cat',
	age: 7,
	color: 'black',
	getAnimalAge: function () {
		return this.age;
	},
	getAnimalName() {
		return this.name;
	},
	eat() {
		return 'eat';
	},
};
const animal4 = {
	name: 'Bird',
	age: 7,
	color: 'black',
	getAnimalAge: function () {
		return this.age;
	},
	getAnimalName() {
		return this.name;
	},
	eat() {
		return 'eat';
	},
};

function Animal2(name, color, age) {
	this.name = name;
	this.color = color;
	this.age = age;
	this.getAnimalAge = () => {
		return this.name;
	};
}
// ES6
class Animal {
	constructor(name, color, age) {
		this.name = name;
		this.color = color;
		this.age = age;
	}
	getAnimalName() {
		return this.name;
	}
}
const firstDog = new Animal('Dog', 'black', 5);
const secondDog = new Animal('Cat', 'black', 15);
// const thirdDog = new Animal('Bird', 'black', 10);
const thirdDog = new Animal2('Bird', 'black', 10);
console.log(firstDog);
console.log(secondDog);
console.log(thirdDog);
