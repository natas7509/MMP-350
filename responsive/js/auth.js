const loginButton = document.getElementById("login-button");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");

//loginButton.onclick = function (e) {
//	//  message.textContent = emailInput.value + " has been submitted";
//	//	console.log(passwordInput);
//
//	const promise = firebase
//		.auth()
//		.signInWithEmailAndPassword(emailInput.value, passwordInput.value);
//	promise.catch(function (error) {
//		message.textContent = error.message;
//	});
//};
//
///* auth state*/
//firebase.auth().onAuthStateChanged(function (user) {
//
//
//});

loginButton.onclick = function(e) {
  const promise = firebase
    .auth()
    .signInWithEmailAndPassword(emailInput.value, passwordInput.value);
  promise.catch(function(error) {
    message.textContent = error.message + " Perhaps it's time to get rid of hotmail ?";
  });
};

/* auth state */
const displayName = document.getElementById("user-name");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.body.classList.add("auth");
    displayName.textContent = "Welcome, " + user.displayName;
  } else {
    document.body.classList.remove("auth");
    displayName.textContent = "";
  }
});

/* log out */
const logoutButton = document.getElementById("logout-button");
logoutButton.onclick = function() {
  firebase.auth().signOut();
};
