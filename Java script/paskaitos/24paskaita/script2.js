document.addEventListener('DOMContentLoaded', () => {
	const user = JSON.parse(localStorage.getItem('user'));
	if (!user) location.replace('login.html');
	else {
		fetchUsers(user);
	}
});

document.getElementById('logout').addEventListener('click', () => {
	location.replace('login.html');
	localStorage.clear();
});
async function fetchUsers(user) {
	const response = await fetch(
		'https://my-test-app2052.herokuapp.com/api/users',
		{
			headers: {
				token: user.token,
			},
		}
	);
	const data = await response.json();
	console.log(data);
}
