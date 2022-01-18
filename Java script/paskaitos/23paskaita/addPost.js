const formEl = document.getElementById('form');

formEl.addEventListener('submit', (event) => {
	event.preventDefault();
	const inputs = event.target.querySelectorAll('input');
	const textareaEl = event.target.querySelector('textarea');
	const dataObj = {
		title: inputs[0].value,
		url: inputs[1].value,
		desc: textareaEl.value,
	};
	addData(dataObj).then((data) => {
		const notificationEl = document.getElementById('notification');
		const innerDiv = notificationEl.querySelector('div');
		notificationEl.classList.add('active');
		if (data.errors) {
			innerDiv.classList.add('error');
			notificationEl.querySelector('h1').textContent = 'Error!';
		} else {
			innerDiv.classList.add('success');
			notificationEl.querySelector('h1').textContent = 'Success!';
		}
		setTimeout(() => {
			innerDiv.className = 'notification__inner';
			notificationEl.classList.remove('active');
			!data.errors && window.location.replace('index.html');
		}, 1500);
	});
});

function addData(data) {
	return fetch('https://my-test-app2052.herokuapp.com/posts', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => data)
		.catch((err) => err);
}
