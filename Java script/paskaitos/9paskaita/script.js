// classlist, classname , style, cssText
const bodyEl = document.body;

// style
console.log(bodyEl);
// syntax - element.style.property = 'value'
// property name is in camelCase; css background-color. In JS backgroundColor
// bodyEl.style.backgroundColor = 'rgba(57,184,175,1)';
// bodyEl.style.color = 'red';
// bodyEl.style.fontSize = '32px';
// syntax is correct but value isn't.

//cssText

// bodyEl.style.cssText =
// 	'background-color: rgba(57,184,175,1); font-size: 32px; color:red;';

// ClassName
// className peraso visas esamas klases kokios tai yra
// bodyEl.className = 'test';

//ClassList
// Gauname masyva/sarasa visu esamu klasiu
// console.log(bodyEl.classList);
// console.log(bodyEl.classList[2]);
// bodyEl.classList.add('fromJS');
// Jeigu klase egzistuoja jos neprideda jeigu ne egzistuoja prideda
// bodyEl.classList.toggle('test4');
// bodyEl.classList.remove('test2');

// 1 task
const controllerSection = document.getElementById('controller');
const resultsSection = document.getElementById('results');

// const defaultBlue = document.getElementById('blue');
// if (defaultBlue.checked) {
// 	resultsSection.style.backgroundColor = 'blue';
// }
// ne geriausias budas paiminti elementus ir priskirti eventus
// const blueRadio = document
// 	.getElementById('blue')
// 	.addEventListener('change', () => {
// 		resultsSection.style.backgroundColor = 'blue';
// 	});
// const redRadio = document
// 	.getElementById('red')
// 	.addEventListener('change', () => {
// 		resultsSection.style.backgroundColor = 'red';
// 	});
// const yellowRadio = document
// 	.getElementById('yellow')
// 	.addEventListener('change', () => {
// 		resultsSection.style.backgroundColor = 'yellow';
// 	});

// geresnis budas
const radioButtons = document.querySelectorAll('input[name=radio-background]');
const positionButtons = document.querySelectorAll(
	'input[name=radio-positions]'
);
const headingResults = resultsSection.querySelector('h1');
const fontSizeInput = document.getElementById('input__fontsize');
function onChangeBackground() {
	for (let radio of radioButtons) {
		radio.addEventListener('change', (event) => {
			resultsSection.style.backgroundColor = event.target.value;
		});
	}
}
function onChangePositions() {
	for (let radio of positionButtons) {
		radio.addEventListener('change', (event) => {
			headingResults.style = '';
			headingResults.style[event.target.value] = '0px';
		});
	}
}
function onChangeFontSize() {
	const sizes = ['16px', '24px', '32px', '48px', '64px'];
	fontSizeInput.addEventListener('change', (event) => {
		// headingResults.style.fontSize = `${event.target.value}px`;
		headingResults.style.fontSize = sizes[event.target.value];
	});
}
onChangeBackground();
onChangePositions();
onChangeFontSize();

function randomNumber() {
	const arr = ['red', 'green', 'blue', 'yellow'];
	const random = Math.floor(Math.random() * arr.length);
	return arr[random];
}
const color = randomNumber();
