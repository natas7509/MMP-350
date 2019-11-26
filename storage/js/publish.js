const postText = document.getElementById('post-text');
const publishButton = document.getElementById('publish');
//const updateButton = document.getElementById('attach-image');

publishButton.addEventListener('click', publishPost);
postText.addEventListener('keyup', function (event) {
	if (event.which == 13) {
		publishPost();
	}
});

const ref = firebase.database().ref('posts');

function publishPost() {
	const post = {}; // empty object
	post.text = postText.value;
	post.uid = firebase.auth().currentUser.uid;
	post.date = Date.now();
	postText.value = "";

	// push post to database

	const promise = ref.push(post);
	promise.then(function (snapshot) {
		addImage(snapshot.key);
	});
}

function addImage(postId) {
	if (file) {
		// upload the file
		const storage = firebase.storage();
		const ref = storage.ref('posts').child(postId).child('attach-image');
		const promise = ref.put(file);

		promise.then(function (image) {
			return image.ref.getDownloadURL();
		}).then(function (url) {
			firebase.database().ref('posts').child(postId).update({
				imageURL: url
			});
		});
	}
}


//WORK ON BELOW TO GET YOUR IMAGETOPOST TO WORK
let file;

const imageButton = document.getElementById('submit-image');
imageButton.addEventListener('click', function () {
	// get the file
	file = document.getElementById('image-file').files[0];
});
