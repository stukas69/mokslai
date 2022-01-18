// Kas yra callback?
function secondFunction(arg) {
	console.log(arg);
}
function mainFunction(arg1, callback) {
	callback('CodeAcademy2');
	console.log(arg1);
}
// secondFunction('CodeAcademy2')
// mainFunction('CodeAcademy')
// mainFunction('CodeAcademy', secondFunction);

// document.addEventListener('click', () => {
// 	console.log('callback');
// });
const array = [1, 2, 3, 4, 5];
// foreach
// jis neturi return, veikia panasiai kaip ciklas
//const result = array.forEach(fn) // blogai.
// array.forEach((value, index, array) => {
// 	console.log('value', value, 'index - ', index, 'array - ', array.length);
// });
// array.forEach((_, index) => {
// 	// console.log('value', value, 'index - ', index, 'array - ', array.length);
// 	console.log('index - ', index);
// });

// array.forEach(myCallBackFn);
// function myCallBackFn(value) {
// 	console.log('value', value);
// }
// array.forEach(function (value) {
// 	console.log('value', value);
// });
// for (let i = 0; i < array.length; i++) {
// 	if (array[i] === 2) {
// 		break;
// 	}
// 	console.log(array[i]);
// }
// array.forEach(function (value) {
// 	if (value === 2) {
// 		break;
// 	}
// 	console.log('value', value);
// });
// foreach uzduotys
const people = [
	{
		name: 'Vidmantas',
		surname: 'Vidmantas',
		sex: 'male',
		age: 23,
		married: false,
	},
	{
		name: 'Petras',
		surname: 'Jonas',
		sex: 'female',
		age: 53,
		married: true,
	},
	{
		name: 'Lukas',
		surname: 'Petras',
		sex: 'male',
		age: 33,
		married: false,
	},
	{
		name: 'Vidmantas',
		surname: 'Kamile',
		sex: 'female',
		age: 20,
		married: true,
	},
];

function printAllMale(people) {
	people.forEach((value) => {
		if (value.sex === 'male') console.log(value);
	});
}
function printAvgAge(people) {
	let sum = 0;
	people.forEach((value) => {
		sum += value.age;
	});
	console.log(Math.round(sum / people.length));
}
const mapArr = people.map((value, index) => {
	return value.age;
});

// const filterArr = people.filter((value) => {
// 	console.log('veikia');
// 	// filter metodas grazina tik true arba false
// 	// return false;
// 	if (value.name === 'Vidmantas') {
// 		return true;
// 	}
// });
// const filterArr = people.filter(
// 	(person) => person.name === 'Vidmantas' && person.age === 23
// );
// console.log(filterArr);
// printAllMale(people);
// printAvgAge(people);

// const findArr = people.find((value) => value.name === 'Vidmantas');
// console.log(findArr);

// const someArr = people.some((value) => value.name === 'Vidmantas');

// console.log(someArr);
// const everyArr = people.every((value) => {
// 	if (value.name === 'Vidmantas') return true;
// });

// console.log(everyArr);

const arr = people
	.map((person) => person.name)
	.filter((person) => person === 'Vidmantas')
	.every((person) => person === 'Vidmantas');
console.log(arr);

const myFilter = (fn, a) => {
	const f = []; //final
	for (let i = 0; i < a.length; i++) {
		if (fn(a[i])) {
			f.push(a[i]);
		}
	}
	return f;
};
const object = {
	filter: myFilter,
};
const ab = object.filter();
