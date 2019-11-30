function createElement(_class, text) {
	const element = document.createElement('div');
	element.classList.add(_class);
	element.textContent = text;
	return element;
}

function createPost(postData, _userData) {

	const userData = _userData || {
		displayName: "Anonymous"
	};

	const post = createElement('post'); // container element
	const text = createElement('text', postData.text);
	const author = createElement('author', 'by ');
	const authorLink = document.createElement('a');
	authorLink.href = 'user.html?uid=' + postData.uid;

	authorLink.textContent = userData.displayName;
	author.appendChild(authorLink);

	var d = new Date(postData.date);
	const date = createElement('date', (d.getMonth() + 1) + "." + d.getDate() + "." + d.getFullYear());

	//	posts.appendChild(post);
	posts.insertBefore(post, posts.firstElementChild);

	/* adding user profile image */
	const img = new Image();
	if (userData.imageURL) {
		img.src = userData.imageURL;
	} else {
		img.src = 'images/logo.png';
	}
	img.classList.add('profile-image');


	if (postData.imageURL) {
		const attachImg = new Image();
		attachImg.src = postData.imageURL;
		post.appendChild(attachImg);
		attachImg.classList.add('attach-image');
	}


	post.appendChild(img);
	post.appendChild(text);
	post.appendChild(author);
	post.appendChild(date);

}