/* database query */
const uid = location.search.split('=')[1];
const posts = document.getElementById('posts');
const postRef = firebase.database().ref('posts').orderByChild('uid').equalTo(uid);
const userRef = firebase.database().ref('users').child(uid);

userRef.on('value', function (snapshot) {
	const userInfo = snapshot.val();
	postRef.on('child_added', function (snapshot) {
		createPost(snapshot.val(), userInfo);
	});
});









/*CHANGE THIS PAGE*/

/*ALSO HIS AUTH.CSS RULES*/
/*CHECK OUT USER.HTML NAV STUFF*/
//ADD USERS.JS

/*ADD NEW USERS.CSS PAGE TO THE CSS PAGE STYLES SECTION*/
