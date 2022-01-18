// // Scopes
// // Global - function - block

// // global scope
// // blokinis scope yra arba if bloke arba ciklo bloke
// const variable = 5;

// function myFuction() {
// 	// function scope
// 	let a = 5;
// 	console.log('function scope', variable);
// 	if (true) {
// 		// block scope
// 		// let ir const yra blokinio scope
// 		// var veikia funkcinio scope lygmenyje
// 		var b = 6;
// 		// norint pasiekti isoreje turiu naudoti var
// 		// let b = 6
// 		console.log('block scope', variable);
// 		console.log('from function scope', a);
// 	}
// 	//
// 	console.log('from block scope to function', b);
// }
// console.log('global scope', b);
// // funkciniame scope sukurto kintamojo globaliai negalime pasiekti
// // naudojant tiek var tiek let tiek const
// // lygiai tas pats ir su block scope
// // console.log(b);

// myFuction();

// =====================================================================

// Task 1

function generateLetters(n) {
	// Raides Kodas is ascii lenteles
	// const letter = 'P';
	// console.log(letter.charCodeAt());
	const letter = `${String.fromCharCode(76)} `;
	// let letters = '';
	for (let i = 0; i < n; i++) {
		if (i + 1 === n) {
			console.log(letter.repeat(n));
		} else {
			console.log(letter, i);
		}
		// letters += `${letter} `;
	}
	// console.log(letters);
}
generateLetters(4);

// Task 4

// function closestNumber(a, b) {
// 	const firstNumber = a - 100;
// 	const secondNumber = b - 100;
// 	if (isNaN(+secondNumber) || isNaN(+firstNumber)) {
// 		alert('Tekstas nera leidziamas');
// 		return;
// 	}

// 	if (a === b) {
// 		alert('Skaiciai yra lygus');
// 	} else if (firstNumber > secondNumber) {
// 		alert(`Pirmas skaicius yra arciau: ${a}`);
// 	} else if (secondNumber > firstNumber)
// 		alert(`Antras skaicius yra arciau: ${b}`);
// }
// closestNumber(50, 101);

// function checkNumber(n) {
// 	const random = Math.floor(Math.random() * 5 + 1);
// 	if (random === n) {
// 		alert('Atspejau')
// 	} else {
// 		alert('Neatspejau');
// 	}
// }
// checkNumber(2);

// let string = 'Labas, kada, kur, kaip';
// string += ', kodel';
// console.log(string);

// function checkVowels(text) {
// 	const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
// 	// 1 budas
// 	let count = 0;
// 	// for (let i = 0; i < text.length; i++) {
// 	// 	if (vowelsArray.includes(text[i])) {
// 	// 		count++;
// 	// 	}
// 	// }
// 	// 2 budas
// 	for (let letter of text) {
// 		if (vowelsArray.includes(letter)) {
// 			count++;
// 		}
// 	}
// 	// console.log(count);
// 	// 3 - regex - advanced
// 	const textCount = text.match(/[aeoui]/gi).length;
// 	console.log(textCount);
// }
// checkVowels('Hello my name is Vidmantas');

// function longerText(text) {
// 	// Split tai string duomenu tipo funkcija kuri padalija teksta i norimas dalis
// 	const textArray = text.split(' ');
// 	let count = 0;
// 	for (let i = 0; i < textArray.length; i++) {
// 		if (textArray[i].length > count) {
// 			count = i;
// 		}
// 		console.log(`count`, count);
// 	}
// 	console.log(textArray[count]);
// 	// console.log(textArray);
// }
// longerText('Hello my name is Vidmantas');

let string = 'vidmantas';
// split pasidarome duomenu tipa string array
const stringArray = string.split('');
stringArray[0] = 'V';
// join - sujungiame array tarpu ir padarome vel ta pati teksta
console.log(stringArray.join(''));
