// sort
// const array = [1, 'esu', 5, 'as', 'Vidmantas', 10];
// const array = [-5, 4, 32, -2, 123, 115];
// array.sort();
// const array = [5, 4, 32, 2, 123, 115];
// const array = ['esu', 'as', 'as', 'Vidmantas'];
// const array = [
// 	{ value: 5, yvalue: 1 },
// 	{ value: 25, yvalue: 1 },
// 	{ value: 545, yvalue: 1 },
// 	{ value: 65, yvalue: 1 },
// 	{ value: 45, yvalue: 1 },
// ]; // by default sort su objektais nieko nedaro nerikiuoja
// array.sort((a, b) => a - b); // nuo maziausio iki didziuausio
// array.sort((a, b) => b - a); // nuo didziausio iki maziausio
// array.sort((a, b) => a.length - b.length); //rikiavimas pagal teksto ilgi
// array.sort((a, b) => {
// 	console.log(a.localeCompare(b));
// 	return a.localeCompare(b);
// }); // rikiavome pagal case sensitive nuo a - z .norint nuo z - a reikia apkeisti b ir a
// array.sort().reverse(); // reverse apsuka musu masyva kita puse
// array.sort();
// console.log(array);

// [12, 11, 2, 32, 4, 5];
// [11, 12, 2, 32, 4, -5];

// [4, 5, 2, 32, 115, 123];
// [3, 2, 8];
// [2, 3, 8];

// reduce

const array = [2, 5, 10, 22, 16];

// const value = array.reduce((acc, curr, index, array) => {
// 	// console.log(acc);
// 	// console.log(curr);
// 	// console.log(index);
// 	// console.log(array);
// 	return acc + curr;
// });
// const value = array.reduce((prevValue, currValue) => prevValue + currValue);
// const value = array.reduce((prevValue, currValue) => prevValue + currValue, 20);

// const value = array.reduce((prevValue, currValue) => {
// 	console.log(prevValue);
// 	return prevValue;
// }, 0);
// const maxValue = array.reduce((acc, curr) => Math.max(acc, curr), 0);
// const minValue = array.reduce((acc, curr) => Math.min(acc, curr));

// console.log(minValue);
const numToText = array.reduce((acc, curr) => {
	// console.log(acc);
	// console.log(curr);
	return acc + curr;
}, '');
console.log(numToText);

const voters = [
	{ name: 'Bob', age: 30, voters: true },
	{ name: 'Bob', age: 30, voters: true },
	{ name: 'Bob', age: 30, voters: false },
	{ name: 'Bob', age: 30, voters: true },
	{ name: 'Bob', age: 30, voters: true },
	{ name: 'Bob', age: 30, voters: false },
	{ name: 'Bob', age: 30, voters: true },
	{ name: 'Bob', age: 30, voters: false },
	{ name: 'Bob', age: 30, voters: true },
	{ name: 'Bob', age: 30, voters: true },
	{ name: 'Bob', age: 30, voters: false },
	{ name: 'Bob', age: 30, voters: true },
	{ name: 'Bob', age: 30, voters: false },
];
// const votersTrue = voters.reduce((acc, curr) => {
// 	if (curr.voters === true) {
// 		return acc + 1;
// 	} else {
// 		return acc;
// 	}
// }, 0);
// const votersFalse = voters.reduce((acc, curr) => {
// 	if (curr.voters === false) {
// 		return acc + 1;
// 	} else {
// 		return acc;
// 	}
// }, 0);
// const object = voters.reduce((acc, curr) => {
// 	if (curr.voters) {
// 		if (!acc['votersTrue']) {
// 			acc['votersTrue'] = 0;
// 		}
// 		acc['votersTrue']++;
// 	} else {
// 		if (!acc['votersFalse']) {
// 			acc['votersFalse'] = 0;
// 		}
// 		acc['votersFalse']++;
// 	}
// 	return acc;
// }, {});
// console.log(object);
// '25102216'
// [2]
// [2 + 5] = 7
// [7+10] = 17;
// [17 + 22] = 39
// [39 + 16] = 55
