//
// getElementByiD

// const heading = document.getElementById('heading');
// console.log(heading);

// 1 budas - be return

// syntax: function Jusu_Pavadinimas() {}  Jusu_Pavadinimas()

// Paprasta funkcija be argumentu ir parametru
// function getUserName() {
// 	console.log('My name is Vidmantas');
// }

// getUserName();
// Parametrai vadinami funkcijos skliausteliuose
function getUserName(name, surname, year) {
	// console.log(
	// 	'My name is ' + name + ' surname is ' + surname + ' born at ' + year
	// );
	console.log(`My name is ${name} surname is ${surname} born at ${year}`);
}
// argumentai tai reiksmes irasomos i funkcijos iskvietimo skliastelius
getUserName('Vidmantas', 'Petras', '1988-04-03');
// Funkcija kuri nera iskvieciama
// console.log(getUserName);

// Funkcija su return;
function addNumbers(x, y) {
	const sum = x + y;
	return sum;
}
const value = addNumbers(5, 15);
const value2 = addNumbers(5, 455);
const value3 = addNumbers(5, 1255);
const value4 = addNumbers(5, 655);
const value5 = addNumbers(135135, 15);
console.log('Value from function return', value);
console.log('Value from function return', value2);
console.log('Value from function return', value3);
console.log('Value from function return', value4);
console.log('Value from function return', value5);

// arrow functions - es6 feature
const arrowFunction = (name, surname) => {
	console.log(this);
	console.log('Test arrow function');
};
const object = {
	test: function () {
		console.log('this is from object', this);
	},
};
object.test();
arrowFunction('Vidmantas', 'Petras');

// Event listener
const btnEl = document.getElementById('mybtn');

btnEl.addEventListener('click', buttonClick);

function buttonClick(event) {
	// event objekta dazniausiai naudosim su target
	console.log(btnEl);
	console.log('event', event.target);
	alert('Button is clicked');
}

// event listener change

const input = document
	.getElementById('mytext')
	.addEventListener('change', changeListener);

function changeListener() {
	alert('Typing....');
}
