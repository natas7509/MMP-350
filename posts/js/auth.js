const loginButton = document.getElementById("login-button");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");

loginButton.onclick = function (e) {
	const promise = firebase
		.auth()
		.signInWithEmailAndPassword(emailInput.value, passwordInput.value);
	promise.catch(function (error) {
		message.textContent = error.message + " Perhaps it's time to get rid of hotmail ?";
	});
};

/* auth state */
const displayName = document.getElementById("user-name");

firebase.auth().onAuthStateChanged(function (user) {

	if (user) {
		document.body.classList.add('auth');

		/* find user in database */
		const userRef = firebase.database().ref('users').child(user.uid);
		userRef.on('value', function (snapshot) {
			const userInfo = snapshot.val();
			displayName.textContent = "Welcome, " + userInfo.displayName;
		});

		const profileButton = document.getElementById("edit-profile");
		profileButton.onclick = function () {
			location.href = "profile.html?uid=" + user.uid;
		};


	} else {
		document.body.classList.remove('auth');
		displayName.textContent = " This is not your account!";
	}
});

/* log out */
const logoutButton = document.getElementById("logout-button");
logoutButton.onclick = function () {
	firebase.auth().signOut();
};
