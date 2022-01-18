// objektas yra sudetas is property ir methods
// const pizza = {
// 	name: 'vezuvio',
// 	house: 'expresspizza',
// 	price: 4,
// 	eat: function () {
// 		alert('Eat pizza');
// 	},
// 	goToPizzaHouse: function () {
// 		alert('Go');
// 	},
// };
//property nereikia skliausteliu ant galo, o metodams reikia
// console.log(pizza.name);
// console.log(pizza.price);
// console.log(pizza.eat());

// kitas pavyzdis
// const car = {
// 	make: 'BMW',
// 	price: 5000,
// 	color: 'blue',
// 	isAvailable: true,
// 	year: {
// 		made: 1997,
// 		used: 2021,
// 	},
// 	run: () => {
// 		console.log('run car');
// 	},
// 	stop: function () {
// 		console.log('stop car');
// 	},
// };
// console.log(car.make);
// console.log(car.price);
// console.log(car.run());
// console.log(car.year.used);
//Metodai kuriuos mes daznai naudojom querySelector(), getElementById
// Property kuriuos daznai naudojom tai - textContent, innerHtml, style

// console.log(window.alert('Tai yra metodas'));
// window.console.log('iskviestas metodas');

// console.dir(document.URL);
// console.dir(document.querySelector('h1').innerText);

// document.location.hash = '#paskaita';
// console.dir(document.location.search);
// console.dir(document.location.reload());

// console.dir(document.location.replace('https://google.com'));
// console.log(window);

const car = {
	name: 'audi',
	year: 1990,
	color: 'white',
	run: function () {
		const mycar = 'car name:' + this.name + ' year:' + this.year;
		console.log(this);
		console.log(mycar);
	},
};
// kaip sukurti objekto property/metoda is undefined reiksmes
// car.isAvailable = true;
// trinimas
// delete car.name;
const carArray = [
	car,
	{
		name: 'bmw',
		year: 1998,
		color: 'white',
		run: function () {
			const mycar = 'car name:' + this.name + ' year:' + this.year;
			console.log(this);
			console.log(mycar);
		},
	},
	{
		name: 'toyota',
		year: 1998,
		color: 'blue',
		run: function () {
			const mycar = 'car name:' + this.name + ' year:' + this.year;
			console.log(this);
			console.log(mycar);
		},
	},
	[{ name: 'ktiamasina' }],
];

// console.log(carArray);
// console.log(carArray[2].color);
// console.log(carArray[3][0].name);
console.log(carArray[0].run());
//           0  1     2
const arr = [1, 's', true];
