const postText = document.getElementById('post-text');
const publishButton = document.getElementById('publish');
//const updateButton = document.getElementById('attach-image');

publishButton.addEventListener('click', publishPost);
postText.addEventListener('keyup', function (event) {
	if (event.which == 13) {
		publishPost();
	}
});

// const ref = firebase.database().ref('posts');

// function publishPost() {
// 	const post = {}; // empty object
// 	post.text = postText.value;
// 	post.uid = firebase.auth().currentUser.uid;
// 	post.date = Date.now();
// 	postText.value = "";

// 	// push post to database

// 	const promise = ref.push(post);
// 	promise.then(function (snapshot) {
// 		addImage(snapshot.key);
// 	});
// }

const ref = firebase.database().ref('posts');

function publishPost() {
	const post = {}; // empty object
	post.text = postText.value;
	post.uid = firebase.auth().currentUser.uid;
	post.date = Date.now();
	postText.value = "";

	// push post to database
	const promise = ref.push(post);
	promise.then(function (post) {
		console.log(post.key);
		if (file) {
			addImage(post.key);
		}
	});
}

// function addImage(postId) {
// 	if (file) {
// 		// upload the file
// 		const storage = firebase.storage();
// 		const ref = storage.ref('posts').child(postId).child('attach-image');
// 		const promise = ref.put(file);

// 		promise.then(function (image) {
// 			return image.ref.getDownloadURL();
// 		}).then(function (url) {
// 			firebase.database().ref('posts').child(postId).update({
// 				imageURL: url
// 			});
// 		});
// 	}
// }
let file;

function addImage(postId) {
	// upload the file
	const storage = firebase.storage();
	const user = firebase.auth().currentUser;
	const ref = storage.ref('posts').child(postId).child('post-image');

	const promise = ref.put(file);

	promise.then(function (image) {
		return image.ref.getDownloadURL();
	}).then(function (url) {
		ref.child(postId).update({
			imageURL: url
		});
	});
}



const imageButton = document.getElementById('submit-image');
imageButton.addEventListener('click', function () {
	// get the file
	file = document.getElementById('image-file').files[0];
});


/*SHANNON*/

//const postText = document.getElementById('post-text');
//const publishButton = document.getElementById('publish');
//
//publishButton.addEventListener('click', publishPost);
//postText.addEventListener('keyup', function(event) {
//	if (event.which == 13) {
//		publishPost();
//	}
//});
//
//const ref = firebase.database().ref('posts');
//
//function publishPost() {
//	const post = {}; // empty object
//	post.text = postText.value;
//	post.uid = firebase.auth().currentUser.uid;
//	post.date = Date.now();
//	postText.value = "";
//	
//	// push post to database
//	const promise = ref.push(post);
//    promise.then(function(post) {
//        console.log(post.key); 
//       if (file) {
//           addImage(post.key);
//       }
//    });
//}
//
//let file;
//
//function addImage(postId) {
//    // upload the file
//    const storage = firebase.storage();
//    const user = firebase.auth().currentUser;
//    const ref = storage.ref('posts').child(postId).child('post-image');
//   
//    const promise = ref.put(file);
//
//    promise.then(function(image) {
//        return image.ref.getDownloadURL();
//    }).then(function(url) {
//       ref.child(postId).update({ imageURL: url });
//    });
//}
//
//const imageButton = document.getElementById('submit-image');
//imageButton.addEventListener('click', function() {
//	// get the file
//    file = document.getElementById('image-file').files[0];
//
//});