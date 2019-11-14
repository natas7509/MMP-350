const posts = document.getElementById('posts');
const postRef = firebase.database().ref('posts');


function loadPosts() {
	postRef.on('child_added', function (snapshot) {
		createPost(snapshot.val());
	});
}

function createElement(_class, text) {
	const element = document.createElement('div');
	element.classList.add(_class);
	element.textContent = text;
	return element;
}

function createPost(data) {
	const post = createElement('post');
	const text = createElement('text', data.text);
	const author = createElement('author', 'by ' + users[data.uid].displayName);

	var d = new Date(data.date);
	const date = createElement('date', (d.getMonth() + 1) + "." + d.getDate() + "." + d.getFullYear());

	//	posts.appendChild(post);
	posts.insertBefore(post, posts.firstElementChild);
	if (users[data.uid].imageURL) {
		const userImage = new Image();
		userImage.src = users[data.uid].imageURL;
		userImage.classList.add('user-image');
		post.appendChild(userImage);
	} else {
		userImage.src = 'images/ball.jpeg';
	}

	post.appendChild(text);
	post.appendChild(author);
	post.appendChild(date);
}





/* get users */
let userCount = 0;
const users = {};
firebase.database().ref('users').on('child_added', function (snapshot) {
	// users[snapshot.key] = snapshot.val().displayName;
	users[snapshot.key] = snapshot.val();
	userCount += 1;
});

firebase.database().ref('users').once('value', function (snapshot) {
	if (userCount === snapshot.numChildren()) {
		loadPosts();
	}
});
