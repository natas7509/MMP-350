const createUserButton = document.getElementById("create-button");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");

createUserButton.onclick = function (e) {

	const promise = firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value);
	promise.catch(function (error) {
		errorMessage.textContent = error.message;
	});
	promise.then(function () {
		location.href = "index.html";
	});
};
