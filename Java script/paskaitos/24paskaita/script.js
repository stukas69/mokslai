const registerForm = document.getElementById('register-form');

if (registerForm)
	registerForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		const inputs = e.target.querySelectorAll('input');
		const inputsArray = [...inputs];
		const data = {
			email: inputsArray.find((item) => item.type === 'email').value,
			username: inputsArray.find((item) => item.type === 'text').value,
			password: inputsArray.find((item) => item.type === 'password')
				.value,
		};
		const user = await onRegister(data);
		if (!user.status) window.location.replace('login.html');
	});

async function onRegister(data) {
	try {
		const response = await fetch(
			'https://my-test-app2052.herokuapp.com/api/register',
			{
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const user = await response.json();
		return user;
	} catch (err) {
		console.log(err);
	}
}

///LOGIN
const loginForm = document.getElementById('login-form');
if (loginForm)
	loginForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		const inputs = e.target.querySelectorAll('input');
		const data = {
			username: inputs[0].value,
			password: inputs[1].value,
		};
		const user = await onLogin(data);
		if (!user.erorr) {
			localStorage.setItem('user', JSON.stringify(user));
			location.replace('index.html');
		}
		console.log(user);
	});

async function onLogin(data) {
	try {
		const response = await fetch(
			'https://my-test-app2052.herokuapp.com/api/login',
			{
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const user = await response.json();
		return user;
	} catch (err) {
		console.log(err);
	}
}
