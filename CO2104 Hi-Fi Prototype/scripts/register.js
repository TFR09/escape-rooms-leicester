const part1 = document.querySelector(".part1"),
    part2 = document.querySelector(".part2"),
    nextBtn = document.querySelector(".next-btn"),
    backBtn = document.querySelector(".back-btn"),
    registerBtn = document.querySelector(".register-btn"),
    alertMsg = document.querySelector(".alert-message"),
    email = document.querySelector(".email"),
    password = document.querySelector(".password"),
    confirmation = document.querySelector(".confirm-password"),
    username = document.querySelector(".username");


const TAKEN = ["admin", "john123"];


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function passwordsMatch(password, confirmation) {
    return password == confirmation;
}

function usernameTaken(username) {
    return TAKEN.includes(username);
}

function emailAlert() {
    alertMsg.hidden = false;
    if (isValidEmail(email.value)) {
            alertMsg.classList.remove("alert-warning");
            alertMsg.classList.add("alert-success");
            alertMsg.innerHTML = "Ok!";
    } else {
            alertMsg.classList.remove("alert-success");
            alertMsg.classList.add("alert-warning");
            alertMsg.innerHTML = "Invalid Email!";
    }
}


function passwordAlert() {
    alertMsg.hidden = false;
    if (passwordsMatch(password.value, confirmation.value)) {
            alertMsg.classList.remove("alert-warning");
            alertMsg.classList.add("alert-success");
            alertMsg.innerHTML = "Ok!";
    } else {
            alertMsg.classList.remove("alert-success");
            alertMsg.classList.add("alert-warning");
            alertMsg.innerHTML = "Passwords Don't Match!";
    }
}


function validCredentials() {
    if (isValidEmail(email.value) && passwordsMatch(password.value, confirmation.value)) {
            nextBtn.disabled = false;
    } else {
            nextBtn.disabled = true;
    }
}

function usernameAlert() {
    alertMsg.hidden = false;
    if (usernameTaken(username.value) || username.value == "") {
        alertMsg.classList.remove("alert-success");
        alertMsg.classList.add("alert-warning");
        alertMsg.innerHTML = username.value == "" ? "Must enter a username":"Username already taken!";
        registerBtn.disabled = true;
    } else {
        alertMsg.classList.remove("alert-warning");
        alertMsg.classList.add("alert-success");
        alertMsg.innerHTML = "Ok!";
        registerBtn.disabled = false;
    }
}


email.addEventListener("keyup", () => {
    emailAlert();
    validCredentials();
}) 

confirmation.addEventListener("keyup", () => {
    passwordAlert();
    validCredentials();
})

nextBtn.addEventListener("click", (event) => {
    event.preventDefault();
    alertMsg.hidden = true;
    part1.hidden = true;
    part2.hidden = false;
})

backBtn.addEventListener("click", (event) => {
    event.preventDefault();
    part2.hidden = true;
    part1.hidden = false;
})

username.addEventListener("keyup", () => {
    usernameAlert();
})

registerBtn.addEventListener("click", () => {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
})