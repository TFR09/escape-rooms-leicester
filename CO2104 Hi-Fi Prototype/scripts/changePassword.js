const email = document.querySelector(".email"),
    alertMsg = document.querySelector(".alert-message"),
    resetBtn = document.querySelector(".reset-btn")


function validEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

function alertUser() {
    if (validEmail(email.value)) {
        alertMsg.classList.remove("alert-warning");
        alertMsg.classList.add("alert-success");
        alertMsg.innerHTML = "Email is valid!";
        resetBtn.disabled = false;
    }
    else {
        resetBtn.disabled = true;
        alertMsg.classList.remove("alert-success");
        alertMsg.classList.add("alert-warning");
        alertMsg.innerHTML = "Please enter a valid email!";
    }
}

resetBtn.addEventListener("click", (event) => {
    event.preventDefault();
    alertMsg.innerHTML = "Email to reset password sent!"
    setTimeout(() => {
        window.history.back();
    }, 3000)
    
});

email.addEventListener("keyup", () => {
    alertMsg.hidden = false;
    alertUser()
})