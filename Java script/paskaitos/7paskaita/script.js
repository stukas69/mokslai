// Anon functions
// let variable = function () {
// 	console.log('yay my function');
// };
// variable();
// Globaliam skope negalime naudoti bevardes funkcijos
// function(){
//     console.log('global scope')
// }
// document.addEventListener('click', function () {
// 	console.log('normal function');
// });
// arrow function
// document.addEventListener('click', (event) => {
// 	console.log(event);
// 	console.log('normal function');
// });

// function myFunction() {
// 	console.log('normal function');
// }

// 1 task.

const inputEl = document.getElementById('multiply');
const paragraphEl = document.querySelector('p');

inputEl.addEventListener('change', (event) => {
	// event.preventDefault()
	// Kaip pasitikrinti duomunu tipa? panaudokim typeof
	// galime prie string prieko prirasyti + ir gausim duomenu tipa number arba panaudoti parseInt() funkcija
	// console.log('Veikia', +event.target.value);
	// console.log('Veikia', parseInt(event.target.value));
	// isNaN tikrina ar reiksme yra Nan ar ne
	const elValue = +event.target.value;
	if (isNaN(elValue)) {
		paragraphEl.textContent = 'Priimami tik skaiciai';
	} else {
		const multiply = elValue * 25;
		// paragraphEl.textContent = 'Your answer is:' + multiply;
		paragraphEl.textContent = `Your answer is: ${multiply}`;
	}
});

// 6 taskas

// function calculateStars(number) {
// 	let stars = '';
// 	for (let i = 0; i < number; i++) {
// 		// stars = stars + '*';
// 		stars += '*';
// 		console.log(stars);
// 	}
// }

// calculateStars(20);

// 5 taskas
// const loopInputEl = document.getElementById('loop');
// const spanEl = document.querySelector('span');

// loopInputEl.addEventListener('change', (event) => {
// 	const inputValue = +event.target.value;
// 	if (isNaN(inputValue)) {
// 		spanEl.textContent = 'Tai ne skaicius';
// 	} else {
// 		let myName = '';
// 		for (let i = 0; i < inputValue; i++) {
// 			// myName += 'Vidmantas';
// 			myName = myName + 'Vidmantas ';
// 		}
// 		spanEl.textContent = myName;
// 	}
// });

const divEl = document.getElementById('mydiv');
const checkboxEl = divEl.querySelector('input');
const buttonEl = divEl.querySelector('button');

buttonEl.addEventListener('click', () => {
	console.log(checkboxEl.checked);
	if (checkboxEl.checked) alert('Checkbox is checked');
	else alert('Checkbox is not checked');
});

const year = 2100;

const isLeap = year % 100 === 0 ? year % 400 === 0 : year % 4;
console.log(isLeap);
