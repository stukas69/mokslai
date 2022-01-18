const meteoBtn = document.getElementById('demo');

// meteoBtn.addEventListener('click', () => {
// 	fetch('https://my-json-server.typicode.com/typicode/demo/posts')
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.then((resp) => {
// 			const divEl = document.createElement('div');
// 			resp.forEach((post) => {
// 				const h1El = document.createElement('h1');
// 				const pEl = document.createElement('p');
// 				h1El.textContent = post.id;
// 				pEl.textContent = post.title;
// 				divEl.append(h1El);
// 				divEl.append(pEl);
// 			});
// 			document.body.append(divEl);
// 		})
// 		.catch((res) => {
// 			document.body.textContent = 'Api' + res.status;
// 		});
// });
// meteoBtn.addEventListener('click', async () => {
// 	try {
// 		const response = await fetch(
// 			'https://my-json-server.typicode.com/typicode/demo/posts'
// 		);
// 		const resp = await response.json();
// 		const divEl = document.createElement('div');
// 		resp.forEach((post) => {
// 			const h1El = document.createElement('h1');
// 			const pEl = document.createElement('p');
// 			h1El.textContent = post.id;
// 			pEl.textContent = post.title;
// 			divEl.append(h1El);
// 			divEl.append(pEl);
// 		});
// 		document.body.append(divEl);
// 	} catch (e) {
// 		console.log(e);
// 	}
// });
