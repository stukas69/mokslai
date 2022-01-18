// const headingEl = document.body.querySelector('h1');
// console.log(headingEl);

// sukurti elementa naudojame document.createElement('elementotagas')

// const headingEl = document.createElement('h1');
// append/prepend sukurti js metodai, sukurto elemento isvedimui i ekrana
// append(sukurto-kintamojo-pav)
// console.log(headingEl);
// headingEl.textContent = 'CodeAcademy2';

// append/appendChild
// document.body.append(headingEl);

// append - galime paduoti betkoki parametra - nubmer-string-node-boolean ir t.t.
// document.body.append('coding is fun');

// appendChild metodas priiema tik node(t.y sukurta elementa su createElement metodu)
// document.body.appendChild(headingEl);
// document.body.appendChild('coding is fun');

// prepend

// prepend nuo append skiriasi kad append iraso elementa i dokumento apacia o prepend i pradzia
// document.body.prepend(headingEl);

// document.querySelector('button').addEventListener('click', () => {
// 	const h1 = document.createElement('h1');
// 	h1.textContent = 'sukurtas elementas po paspaudimo';
// 	h1.style.fontSize = '64px';
// 	document.body.append(h1);
// });

// visada kursime elementus is document objekto
// const divEl = document.createElement('div');
// const headingEl2 = document.createElement('h1');
// headingEl2.textContent = 'CodeAcademy3';
// divEl.append(headingEl2);
// document.body.append(divEl);

// const sectionEl = document.querySelector('section');
// const btnEl = document.createElement('button');
// btnEl.textContent = 'this is button';
// sectionEl.append(btnEl);

// const inputEl = document.createElement('input');
// inputEl.type = 'number';
// document.body.append(inputEl);
// const imgEl = document.createElement('img');
// imgEl.src = 'https://picsum.photos/200/300';
// imgEl.alt = 'No image';
// document.body.append(imgEl);

// Task
function main() {
	const navEl = createElement('nav');
	const imgEl = createElement('img');
	imgEl.src = 'https://picsum.photos/50/50';
	imgEl.alt = 'No image';
	const listEl = createElement('ul');
	const firstLiEl = createElement('li', 'Home');
	const secondLiEl = createElement('li', 'About');
	const thirdLiEl = createElement('li', 'Contact Us');
	// const listEl = document.createElement('ul');
	// const firstLiEl = document.createElement('li');
	// const secondLiEl = document.createElement('li');
	// const thirdLiEl = document.createElement('li');
	// firstLiEl.textContent = 'Home';
	// secondLiEl.textContent = 'About';
	// thirdLiEl.textContent = 'Contact Us';
	const iconEl = createElement('i', '', 'fas fa-bars');

	listEl.append(firstLiEl);
	listEl.append(secondLiEl);
	listEl.append(thirdLiEl);
	navEl.append(imgEl);
	navEl.append(listEl);
	navEl.append(iconEl);
	iconEl.addEventListener('click', () => {
		alert('Hello mobile view');
	});
	document.body.append(navEl);
}
main();

function createElement(element, text, classname) {
	const el = document.createElement(element);
	if (text !== '') el.textContent = text;
	if (classname) el.className = classname;
	return el;
}
