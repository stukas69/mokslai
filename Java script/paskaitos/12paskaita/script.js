//Boolean

// console.log(Boolean('a'));
// const test = 'Test';
// console.log(!!test);
// console.log(Boolean('MyText'));

// Number
// console.log(Number('5'));
// console.log(new Number('5').valueOf());

// const number = 5;
// console.log(number.toString());
// console.log(number.toFixed(1));
// console.log(number.toPrecision(5));
// console.log(number.toExponential(5));

// String

// console.log(new String('Hey'));
const string = 'codeAcademy';

// console.log(string.charAt(3));
// console.log(string[3]);
// console.log(string.concat('MyCode', 'This is'));
// console.log(string.endsWith('Academ'));
// if (string.endsWith('Academy')) {
// 	alert('Taip baigesi');
// }
// console.log(string.startsWith('Code'));
// console.log(string.includes('da'));
// console.log(string.indexOf('de'));
// if (string.indexOf('de') > -1) {
// 	alert('egzistuoja');
// }
// console.log(string.length);
// console.log(string.match(/[Code]/g));
// console.log(string.repeat(5));
// console.log(string.replace('Code', 'MyCode'));
// console.log(string.search('de'));
// console.log(string.slice(-1));
// console.log(string.slice(4));
// console.log(string.slice(0, 4));
// console.log(string.slice(6, 4)); //negalima su slice taip daryti
// console.log(string.substring(6, 4));
// console.log(string.toLowerCase());
// console.log(string.toUpperCase());
// console.log(string.trim());
// console.log(string.split(''));
// console.log(string.split(' ').join(' '));

// Task 1
// console.log(string.charAt(0).toUpperCase() + string.slice(1));
// console.log(String.fromCharCode(76));
// Task 2
// const text = 'Mytext secondText ThirdText';
// console.log(text.replaceAll(' ', '-'));
// Task 3
function calculateLetters(string) {
	const object = {};
	const letterArr = string.split('');
	// for (let i = 0; i < letterArr.length; i++) {
	// 	const letter = letterArr;
	// 	if (!object[letter]) {
	// 		object[letter] = 1;
	// 	} else {
	// 		object[letter]++;
	// 	}
	// }
	for (let letter of letterArr) {
		if (!object[letter]) {
			object[letter] = 1;
		} else {
			object[letter]++;
		}
	}
	console.log(object);
}
function capitaliseLetters(string, indexArr) {
	let arr = string.split('');
	for (let i of indexArr) {
		arr[i] = arr[i].toUpperCase();
	}
	console.log(arr.join(''));
}
capitaliseLetters('CodeAcademy', [2, 6, 4]);
// calculateLetters('CodeAcademy');

function camelCase(string) {
	const stringArr = string.split(' ');
	let length = stringArr.length;
	let result = '';
	for (let i = 0; i < length; i++) {
		const word = stringArr[i];
		if (i === 0) {
			result = result + word.charAt(0).toLowerCase() + word.slice(1);
		} else {
			result = result + word.charAt(0).toUpperCase() + word.slice(1);
		}
	}
	console.log(result);
}
camelCase('Labas Code Academy test labas');
