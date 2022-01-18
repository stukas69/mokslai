//https://my-test-app2052.herokuapp.com/posts
async function addPost(data) {
	try {
		const response = await fetch(
			'https://my-test-app2052.herokuapp.com/posts',
			{
				method: 'POST',
				body: JSON.stringify(data),
				headers: { 'Content-Type': 'application/json' },
			}
		);
		const post = await response.json();
		return post;
	} catch (err) {
		console.log(err);
	}
}
async function fetchPosts() {
	try {
		const response = await fetch(
			'https://my-test-app2052.herokuapp.com/posts'
		);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}
function displayPosts(posts) {
	posts.forEach((post) => {
		const postDiv = document.createElement('div');
		const postHeading = document.createElement('h2');
		const postParagraph = document.createElement('p');
		const postImage = document.createElement('img');
		postHeading.textContent = post.title;
		postParagraph.textContent = post.desc;
		postImage.src = post.url;
		postDiv.append(postImage);
		postDiv.append(postHeading);
		postDiv.append(postParagraph);
		document.getElementById('posts').append(postDiv);
	});
}
function create(type, element, option) {
	const el = document.createElement(type);
	if (option.textContent) el.textContent = textContent;
	if (option.src) el.src = src;
	element.append(el);
}
document.addEventListener('DOMContentLoaded', async () => {
	const postsArray = await fetchPosts();
	displayPosts(postsArray);
});

const formEl = document.getElementById('form');
formEl.addEventListener('submit', async (event) => {
	event.preventDefault();
	const inputArray = event.target.querySelectorAll('input');
	const title = inputArray[0].value;
	const desc = inputArray[1].value;
	const url = inputArray[2].value;
	if (title && desc && url) {
		const postData = {
			title,
			desc,
			url,
		};
		const post = await addPost(postData);
		displayPosts([post]);
		// window.location.replace('index.html');
		// window.location.reload();
	}
});
