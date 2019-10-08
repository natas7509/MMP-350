const createButton = document.getElementById("create-button");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");

//createUserButton.onclick = function () {
//	message.textContent = emailInput.value + " has been created!";
//	console.log(emailInput);
//
//	firebase
//		.auth()
//		.createUserWithEmailAndPassword(emailInput.value, passwordInput.value);
//};


/*Adding to the database*/
//createUserButton.onclick = function () {
//	const promise = firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value);
//	promise.catch(function (error) {
//		errorMessage.textContent = error.message;
//	});
//
//	promise.then(function (credential) {
//		createUser(credential.user.uid);
//	});
//};
//
//function createUser(uid) {
//	const db = firebase.database();
//	const ref = db.ref("users").child(uid);
//	const promise = ref.update({
//		displayName: userInput.value
//	});
//
//	promise.then(function () {
//		location.href = "index.html";
//	});
//}

/*Adding to the database*/
createButton.onclick = function () {
	const promise = firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value);
	promise.catch(function (error) {
		errorMessage.textContent = error.message;
	});

	promise.then(function (credential) {
		createUser(credential.user.uid);
	});
};

function createUser(uid) {
	const db = firebase.database();
	const ref = db.ref("users").child(uid);
	const promise = ref.update({
		displayName: userInput.value
	});

	promise.then(function () {
		location.href = "index.html";
	});
}
