document.addEventListener('DOMContentLoaded', async () => {
	const posts = await fetchPosts();
	displayPosts(posts);
});
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
		const imgEl = document.createElement('img');
		const titleEl = document.createElement('h1');
		const descEl = document.createElement('p');
		const idEl = document.createElement('p');
		const deleteBtn = document.createElement('button');
		const titleInputEl = document.createElement('input');
		const descInputEl = document.createElement('input');
		const updateBtn = document.createElement('button');
		removePost(deleteBtn, post);
		update(updateBtn, post);
		postDiv.style.display = 'inline-block';
		postDiv.style.marginRight = '32px';
		imgEl.src = post.url;
		titleEl.textContent = post.title;
		idEl.textContent = post._id;
		descEl.textContent = post.desc;
		deleteBtn.textContent = 'Delete Post';
		updateBtn.textContent = 'Update Post';
		titleInputEl.setAttribute('name', 'title');
		descInputEl.setAttribute('name', 'desc');
		postDiv.append(titleEl);
		postDiv.append(idEl);
		postDiv.append(descEl);
		postDiv.append(deleteBtn);
		postDiv.append(titleInputEl);
		postDiv.append(descInputEl);
		postDiv.append(updateBtn);
		document.getElementById('output').append(postDiv);
	});
}
function removePost(buttonEl, data) {
	buttonEl.addEventListener('click', async function () {
		const post = await deletePost(data._id);
		if (post.deletedCount && post.deletedCount > 0)
			this.parentNode.remove();
	});
}
function update(button, data) {
	button.addEventListener('click', async function () {
		const inputs = this.parentNode.querySelectorAll('input');
		const dataObj = {
			title: inputs[0].value,
			desc: inputs[1].value,
		};
		const post = await updatePost(data._id, dataObj);
		console.log(post);
		if (post.modifiedCount && post.modifiedCount > 0) location.reload();
	});
}
async function deletePost(id) {
	try {
		const response = await fetch(
			// 'https://my-test-app2052.herokuapp.com/posts/' + id,
			`https://my-test-app2052.herokuapp.com/posts/${id}`,
			{ method: 'DELETE' }
		);
		return await response.json();
	} catch (err) {
		console.log(err);
	}
}
async function updatePost(id, data) {
	try {
		const response = await fetch(
			`https://my-test-app2052.herokuapp.com/posts/${id}`,
			{
				method: 'PATCH',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return await response.json();
	} catch (err) {
		console.log(err);
	}
}
// rest api  get metodas https://my-test-app2052.herokuapp.com/posts
// rest api  delete metodas https://my-test-app2052.herokuapp.com/posts/61d5db5ed6733267811c6cd6
// rest api  update metodas https://my-test-app2052.herokuapp.com/posts/61d5db5ed6733267811c6cd6

// GET - gauna duomenis
// funkcija displayPosts - atvaizduoja duomenis
// sukuria button deletePosts
// buttonas turi addEventListener kuris daro DELETE uzklausa;
//aisku
