const posts = document.getElementById("posts");
const postRef = firebase.database().ref("posts");

function loadPosts() {
	postRef.on('child_added', function (snapshot) {
		createPost(snapshot.val());
	});
}

function createElement(_class, text) {
	const element = document.createElement("div");
	element.classList.add(_class);
	element.textContent = text;
	return element;
}


/*THIS WAS THE FIREBASE ERROR FIX*/
function createPost(data) {

	const post = createElement("post");
	const text = createElement("text", data.text);
	var userData = users[data.uid] ? users[data.uid] : {
		displayName: "anonymous"
	};
	const author = createElement("author", "by " + userData.displayName);

	var d = new Date(data.date);
	const date = createElement(
		"date",
		d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear()
	);

	//	posts.appendChild(post);
	posts.insertBefore(post, posts.firstElementChild);

	/* adding user profile image */
	const img = new Image();
	if (userData.imageURL) {
		img.src = userData.imageURL;
	} else {
		img.src = "images/logo.png";
	}
	img.classList.add("profile-image");

	const postImg = new Image();
	if (data.imageURL) {
		postImg.src = data.imageURL;
	}
	postImg.classList.add('post-image');

	post.appendChild(img);
	post.appendChild(text);
	post.appendChild(author);
	post.appendChild(date);
	post.appendChild(postImg);

}


// get users
let userCount = 0;
const users = {};
firebase
	.database()
	.ref("users")
	.on("child_added", function (snapshot) {
		// users[snapshot.key] = snapshot.val().displayName;
		users[snapshot.key] = snapshot.val();
		userCount += 1;
	});

firebase
	.database()
	.ref("users")
	.once("value", function (snapshot) {
		if (userCount === snapshot.numChildren()) {
			loadPosts();
		}
	});




// adding ATTACHMENT image
// const attachImg = new Image();
// if (data.imageURL) {
// 	attachImg.src = data[data.uid].imageURL;
// } else {
// 	attachImg.src.style.display = "none";
// }
// attachImg.classList.add("attach-image");