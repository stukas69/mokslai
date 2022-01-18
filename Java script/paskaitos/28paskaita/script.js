// import anyName, { hello, sayHello } from './test.js';
// import anyName from './test.js';
// import anyName, { hello, sayHello as nextName } from './test.js';
// const sayHello = 'safasfasfa';
import { fetchCoctails } from './api.js';
import { getIngredients } from './utils.js';
document.addEventListener('DOMContentLoaded', async () => {
	const coctails = await fetchCoctails();
	displayCoctails(coctails);
});

function displayCoctails(data) {
	data.drinks.forEach((coctail) => {
		const divEl = document.createElement('div');
		const headingEl = document.createElement('h1');
		const ingredients = getIngredients(coctail);
		headingEl.textContent = coctail.strDrink;
		divEl.append(headingEl);
		ingredients.forEach((ingredient) => {
			const pEl = document.createElement('p');
			pEl.textContent = ingredient;
			divEl.append(pEl);
		});
		document.getElementById('output').append(divEl);
	});
}
