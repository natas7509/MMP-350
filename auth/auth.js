const loginButton = document.getElementById('login-button');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const message = document.getElementById("login-message");



loginButton.onclick = function (e) {
message.textContent = emailInput.value + " has been submitted";
console.log(emailInput);


	firebase.auth().signInWithEmailAndPassword(emailInput.value, passwordInput.value);
};
