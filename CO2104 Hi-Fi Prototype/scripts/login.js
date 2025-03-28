const   username = document.querySelector(".username"),
        password = document.querySelector(".password"),
        loginBtn = document.querySelector(".login-btn"),
        alertMsg = document.querySelector(".alert-message")

const users = {
        "admin": "password"
}


function validUsername(user) {
        let u = localStorage.getItem("username")
        
        return u == user || user == "admin"
}       

function validPassword(pass) {
        let p = localStorage.getItem("password");
        return p == pass || pass == "password";
}


function usernameAlert() {
        alertMsg.hidden = false;
        if (validUsername(username.value)) {
                alertMsg.classList.remove("alert-warning");
                alertMsg.classList.add("alert-success");
                alertMsg.innerHTML = "Ok!";
        } else {
                alertMsg.classList.remove("alert-success");
                alertMsg.classList.add("alert-warning");
                alertMsg.innerHTML = "Please enter a valid Username!";
        }
}

function passwordAlert() {
        alertMsg.hidden = false;
        if (validPassword(password.value)) {
                alertMsg.classList.remove("alert-warning");
                alertMsg.classList.add("alert-success");
                alertMsg.innerHTML = "Ok!";
        } else {
                alertMsg.classList.remove("alert-success");
                alertMsg.classList.add("alert-warning");
                alertMsg.innerHTML = "Invalid Password!";
        }
}


function validCredentials() {
        if (validUsername(username.value) && validPassword(password.value)) {
                loginBtn.disabled = false;
        } else {
                loginBtn.disabled = true;
        }
}


username.addEventListener("change", () => {
        usernameAlert();
        validCredentials();
})

password.addEventListener("change", () => {
        passwordAlert();
        validCredentials();
})

