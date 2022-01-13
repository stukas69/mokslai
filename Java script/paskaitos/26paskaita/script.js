let page = 1;
document.addEventListener('DOMContentLoaded', async () => {
	const data = await fetchData(page);
	displayData(data);
});
window.addEventListener('scroll', async () => {
	if (scrollY + innerHeight >= document.documentElement.scrollHeight) {
		page++;
		const data = await fetchData(page);
		displayData(data);
	}
});

async function fetchData(page) {
	const loaderEl = document.querySelector('.loader');
	try {
		loaderEl.classList.add('active');
		const response = await fetch(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&aorder=market_cap_desc&per_page=10&page=${page}&sparkline=false`
		);
		const data = await response.json();
		loaderEl.classList.remove('active');
		return data;
	} catch (err) {
		loaderEl.classList.remove('active');
		console.log(err);
	}
}
function displayData(data) {
	data.forEach((item) => {
		const divEl = createElement('div');
		createElement('h1', divEl, { text: item.name });
		createElement('p', divEl, { text: item.market_cap_rank });
		createElement('img', divEl, { src: item.image });
		document.getElementById('container').append(divEl);

		///////
		// const headingEl = document.createElement('h1');
		// headingEl.textContent = item.name;
		// divEl.append(headingEl);
	});
}
function createElement(tag, appendEl, options) {
	const el = document.createElement(tag);
	if (options) {
		if (options.src) el.src = options.src;
		if (options.className) el.className = options.className;
		if (options.text) el.textContent = options.text;
	}
	if (appendEl) appendEl.append(el);
	return el;
}
