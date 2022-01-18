// const array = [5, 4, 3, 2, 1];
// // const array2 = array.slice(0); // anksciau
// // console.log(...array);
// const array2 = [...array];
// array2.push(6);
// console.log(array);
// console.log(array2);
// // ['asfasf', 5, 4, 3, 2, 1, 'fasfas'];
// const array3 = ['labas', ...array, 'Ate'];
// console.log(array3);

// Task 1 pakelti kvadratu
const calcuteNumber = (num) => {
	if (isNaN(num)) return 'Not a number';
	return Math.pow(num, 3);
};
// Task 2 surasti maksimalu skaiciu masyve
// const findMaxValue = (array) =>
// 	Math.max(...array.filter((item) => !isNaN(item)));
// const findMaxValue = (array) => {
// 	let max = 0;
// 	for (let item of array) {
// 		if (item > max) max = item;
// 	}
// 	return max;
// };
// const findMaxValue = (array) => {
// 	return array.reduce((max, curr) => {
// 		// if (curr > max) max = curr;
// 		// return curr > max ? curr : max;
// 		return Math.max(curr, max);
// 	}, 0);
// };
console.log(calcuteNumber(2));
// console.log(findMaxValue([3, 6, 312, 563, 2356, 236, 153, 36, 785]));

// Task3 ar zodis yra palindromas

// const isPalindrom = (word1, word2) => {
// 	const array = word1.split('').reverse().join('');
// 	return array === word2 ? 'Tai palindromas' : 'Tai ne palindromas';
// };
const isPalindrom = (word1, word2) => {
	// console.log(word1.split('').reverse().join(''));
	// console.log(['tekstas', 'te', 'tea', 'afgsg'].join(' '));
	return word1.split('').reverse().join('') === word2
		? 'Tai palindromas'
		: 'Tai ne palindromas';
};
console.log(isPalindrom('alus', 'sula'));

// Task4 surasti funkcijos varda

function myFunc() {
	return arguments.callee.name;
}
console.log(myFunc());

// Task 5
// const removeChar = (string, char) => {
// 	if (!string.includes(char)) return 'Tokia raide neegzistuoja';
// 	return string.replaceAll(char, '');
// };
// console.log(removeChar('Mano naujas tekstas', 'a'));

const removeChar = (string, char) => {
	let str = '';
	for (let value of string.split('')) {
		if (char.includes(value)) {
			str = str + '';
		} else str = str + value;
	}
	return str;
};
console.log(removeChar('Mano naujas tekstas', ['a', 'j', 't']));

const stringFunc = (string) => {
	const len = string.length;
	for (let i = 0; i < len; i++) {
		const currValue = string[i];
		const nextValue = string[i + 1];
		const thirdValue = string[i + 2];
		//nextValue
		if (i + 1 < len) {
			if (currValue !== nextValue && nextValue !== thirdValue)
				return nextValue;
		} else return -1;
	}
};
console.log(stringFunc('aabbv'));
