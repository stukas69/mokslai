document.cookie = `name=Vidmantas2; expires=Wed, 22 Dec 2022 16:56:30 GMT`;
// console.log(new Date().toUTCString());
// const name = document.cookie.slice(5, 14);
// document.body.innerText = name;

// Cookies.set('name', 'value', { expires: 7 });
// console.log(Cookies.get('name'));

// localStorage
console.log(localStorage);
// localstorage kurimas
// localStorage.setItem('name', 'Vidmantas');
// localStorage.setItem('name', ['Vidm,antas', 'as']);
// localStorage.setItem('name', JSON.stringify(['Vidm,antas', 'as']));

// //localstorage get
// console.log(JSON.parse(localStorage.getItem('name')));
// localStorage.setItem('name', 5);
// console.log(typeof localStorage.getItem('name'));
// Remove item
// localStorage.removeItem('name');
// localStorage.clear();

// Task2

const formEl = document.querySelector('form');
const outputEl = document.getElementById('output');
const localName = localStorage.getItem('name');
const localImageUrl = localStorage.getItem('imageUrl');
if (localName && localImageUrl) {
	const headingEl = document.createElement('h4');
	const imgEl = document.createElement('img');
	imgEl.src = localImageUrl;
	headingEl.innerText = localName;
	outputEl.append(headingEl);
	outputEl.append(imgEl);
}

formEl.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = event.target.querySelector('[name=name]').value.trim();
	const image = event.target.querySelector('[name=image]').value.trim();
	localStorage.setItem('name', name);
	localStorage.setItem('imageUrl', image);
	const headingEl = document.createElement('h4');
	const imgEl = document.createElement('img');
	imgEl.src = image;
	headingEl.innerText = name;
	outputEl.append(headingEl);
	outputEl.append(imgEl);
});
