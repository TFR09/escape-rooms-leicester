const email = document.querySelector("#email"),
    username = document.querySelector("#username"),
    password = document.querySelector("#password"),
    alertMsg = document.querySelector(".alert-msg"),
    pfp = document.querySelector("#profile-picture"),
    submitBtn = document.querySelector(".submit-btn"),
    fileInput = document.getElementById('profile-picture'),
    profileImage = document.getElementById('profileImage');


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function resetAlert() {
    alertMsg.hidden = true;
    alertMsg.classList.remove("alert-warning");
    alertMsg.classList.remove("alert-warning");
    alertMsg.innerHTML = "";
}

function saveProfilePicture() {
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageDataUrl = e.target.result;
            localStorage.setItem('profilePicture', imageDataUrl);
            profileImage.src = imageDataUrl;
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Load profile picture from local storage on page load
window.onload = function() {
    const storedImageDataUrl = localStorage.getItem('profilePicture');
    username.value = localStorage.getItem("username");
    email.value = localStorage.getItem("email");
    password.value = localStorage.getItem("password");

    if (storedImageDataUrl) {
        const profileImage = document.getElementById('profileImage');
        profileImage.src = storedImageDataUrl;
    }
    else {
        profileImage.src = "../images/user.png"
    }
};


submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    alertMsg.hidden = false;
    if (!isValidEmail(email.value)) {
        alertMsg.classList.add("alert-warning");
        alertMsg.innerHTML = "Enter a valid email!";        
    } else if (password.value == "") {
        alertMsg.classList.add("alert-warning");
        alertMsg.innerHTML = "Enter a password!"; 
    } else {
        alertMsg.classList.add("alert-success");
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        saveProfilePicture()
        alertMsg.innerHTML = "Information changed successfully!"
    }

    setTimeout(resetAlert, 2000);
})