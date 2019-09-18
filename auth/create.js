const createUserButton = document.getElementById("create-button");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");

createUserButton.onclick = function(e) {
  message.textContent = emailInput.value + " has been created!";
  console.log(emailInput);

  firebase
    .auth()
    .createUserWithEmailAndPassword(emailInput.value, passwordInput.value);
};
