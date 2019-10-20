const uid = location.search.split('=')[1];
const userRef = firebase.database().ref('users').child(uid);
const profileName = document.getElementById('profile-name');
const bioInput = document.getElementById('bio');
const updateButton = document.getElementById('update-profile');
const phoneInput = document.getElementById('phone');
const genderInput = document.getElementById('gender');
const websiteInput = document.getElementById('website');

// Profile Info
userRef.on('value', function (snapshot) {
	const userInfo = snapshot.val();
	profileName.value = userInfo.displayName;

	if (userInfo.bio) {
		bioInput.value = userInfo.bio;

		(userInfo.phone)
		phoneInput.value = userInfo.phone;

		(userInfo.gender)
		genderInput.value = userInfo.gender;

		(userInfo.website)
		websiteInput.value = userInfo.website;
	}
});

updateButton.onclick = function () {
	userRef.update({
		displayName: profileName.value,
		bio: bioInput.value,
		phone: phoneInput.value,
		gender: genderInput.value,
		website: websiteInput.value
	});
};