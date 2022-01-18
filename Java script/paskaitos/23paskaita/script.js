document.addEventListener('DOMContentLoaded', () => {
	fetchPost().then((data) => {
		const tbodyEl = document.querySelector('tbody');
		data.forEach((post) => {
			const trEl = document.createElement('tr');
			const titleTdEl = document.createElement('td');
			const descriptionTdEl = document.createElement('td');
			const imageTdEl = document.createElement('td');
			const image = document.createElement('img');
			titleTdEl.textContent = post.title;
			descriptionTdEl.textContent = post.desc;
			image.src = post.url;
			imageTdEl.append(image);
			trEl.append(titleTdEl);
			trEl.append(descriptionTdEl);
			trEl.append(imageTdEl);
			tbodyEl.append(trEl);
		});
	});
});

function fetchPost() {
	return fetch('https://my-test-app2052.herokuapp.com/posts')
		.then((response) => response.json())
		.then((data) => data)
		.catch((err) => err);
}
