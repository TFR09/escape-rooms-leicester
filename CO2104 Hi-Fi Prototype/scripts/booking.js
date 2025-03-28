const bookingBtn = document.querySelector(".book");
const bookingDialog = document.querySelector(".booking");
const section1 = document.querySelector(".section-1");
const section2 = document.querySelector(".section-2");
const reviewSection = document.querySelector(".section-3");
const cancelBtn = document.querySelector(".cancel-btn");
const backBtn = document.querySelector(".back-btn");
const backBtn2 = document.querySelector(".back-btn-2");
const nextBtn = document.querySelector(".next-btn");
const ReviewBookingBtn = document.querySelector(".book-btn");
const ConfirmBookingBtn = document.querySelector(".confirm-btn");
const disabledBtn = document.querySelector(".clickable-1");
const disabledBtn2 = document.querySelector(".clickable-2");
const alertMsg = document.querySelector(".alert-msg-1");
const alertMsg2 = document.querySelector(".alert-msg-2");
const bookingAlert = document.querySelector(".wishlist-alert");


const date = document.querySelector("#date");
const timeslot = document.querySelector("#timeslot");
const card = document.querySelector("#cardNumber");
const cvv = document.querySelector("#cvv");
const expiryDate = document.querySelector("#expiryDate");

const reviewUser = document.querySelector(".review-guest");
const reviewDate = document.querySelector(".review-date")
const reviewTime = document.querySelector(".review-timeslot")
const reviewCard = document.querySelector(".review-card")
const reviewExDate = document.querySelector(".review-expiry-date")
const reviewCVV = document.querySelector(".review-cvv")
const reviewTotal = document.querySelector(".review-total")


function isValidCardNumber() {
    let cardNumber = card.value;
    cardNumber = cardNumber.replace(/\D/g, '');

    if (cardNumber.length === 0 || !/^\d+$/.test(cardNumber)) {
        return false;
    }

    const reversedDigits = cardNumber.split('').reverse().join('');

    let sum = 0;
    for (let i = 0; i < reversedDigits.length; i++) {
        let digit = parseInt(reversedDigits.charAt(i), 10);

        if (i % 2 !== 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
    }

    return sum % 10 === 0;
}

function validCVV(){
    const cvvValue = cvv.value.trim();
    return /^\d{3}$/.test(cvvValue);
}

function validExpiryDate() {
    const inputValue = expiryDate.value.trim();

    if (/^\d{2}\/\d{2}$/.test(inputValue)) {
        let [month, year] = inputValue.split("/");

        month = parseInt(month, 10);
        year = parseInt(year, 10);

        const currentYearLastTwoDigits = new Date().getFullYear() % 100; // Get last two digits of current year

        if (year === currentYearLastTwoDigits) {
            return month > new Date().getMonth() + 1;
        } else {
            return year > currentYearLastTwoDigits && month <= 12; // Year must be greater and month should be valid
        }
    }

    return false;
}

function maskCreditCardNumber(cardNumber) {
    const visibleDigits = 4;
    const maskedSections = cardNumber.slice(0, -visibleDigits).replace(/./g, '*');
    const lastFourDigits = cardNumber.slice(-visibleDigits);

    return maskedSections + lastFourDigits;
}


bookingBtn.addEventListener("click", () => {
    bookingDialog.showModal();
})

cancelBtn.addEventListener("click", () => {
    bookingDialog.close();
})


function validDate() {
    return date.value != "" && new Date(date.value) >= new Date();
}

function resetBooking() {
    date.value =  "";
    timeslot.value = "";
    card.value = "";
    expiryDate.value = "";
    cvv.value = "";

    reviewSection.style.display = "none";
    section1.style.display = "flex"; 
}

function disableRandomOptions(numToDisable) {
    const selectId = 'timeslot';
    const selectElement = document.getElementById(selectId);
    const options = selectElement.querySelectorAll('option');

    const optionIndices = Array.from(options).map((option, index) => index).slice(1);

    shuffleArray(optionIndices);

    
    for (let i = 0; i < numToDisable; i++) {
        const randomIndex = optionIndices[i];
        options[randomIndex].disabled = true;
    }
}

function resetDisabled() {
    const selectId = 'timeslot';
    const selectElement = document.getElementById(selectId);
    const options = selectElement.querySelectorAll('option');

    for (let i = 1; i < options.length; i++) {
        options[i].disabled = false;
    }
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

date.addEventListener("change", () => {
    resetDisabled();
    let numToDisable = getRandomNumber(4, 10);
    disableRandomOptions(numToDisable);
})

nextBtn.addEventListener("click", () => {
    if (!validDate()) {
        alertMsg.innerHTML = "Select a valid date!";
        setTimeout(() => {
            alertMsg.innerHTML = "";
        }, 3000)
        return
    } if (timeslot.value == "") {
        alertMsg.innerHTML = "Select a valid timeslot!";
        setTimeout(() => {
            alertMsg.innerHTML = "";
        }, 3000)
        return
    }

    section1.style.display = "none";
    section2.style.display = "flex";
})

backBtn.addEventListener("click", () => {
    section1.style.display = "flex";
    section2.style.display = "none";
})

ReviewBookingBtn.addEventListener("click", () => {
    if (!isValidCardNumber()) {
        alertMsg2.innerHTML = "Enter a valid card number!"
        setTimeout(() => {
            alertMsg2.innerHTML = "";
        }, 3000)
        return
    } if (!validExpiryDate()) {
        alertMsg2.innerHTML = "Enter a valid expiry date!"
        setTimeout(() => {
            alertMsg2.innerHTML = "";
        }, 3000)
        return
    } if (!validCVV()) {
        alertMsg2.innerHTML = "Enter a valid CVV!"
        setTimeout(() => {
            alertMsg2.innerHTML = "";
        }, 3000)
        return
    }

    let price = document.querySelector(".details-list .price").innerHTML.replace("Price: ", "");

    reviewUser.innerHTML = localStorage.getItem("username");
    reviewDate.innerHTML = date.value;
    reviewTime.innerHTML = timeslot.value;
    reviewCard.innerHTML = maskCreditCardNumber(card.value) 
    reviewExDate.innerHTML = expiryDate.value; 
    reviewCVV.innerHTML = cvv.value;
    reviewTotal.innerHTML = price;

    section2.style.display = "none";
    reviewSection.style.display = "flex";    
})

backBtn2.addEventListener("click", () => {
    section2.style.display = "flex";
    reviewSection.style.display = "none";
})

ConfirmBookingBtn.addEventListener("click", () => {
    bookingDialog.close();

    resetBooking()

    bookingAlert.hidden = false;
    bookingAlert.classList.add("alert-success");
    bookingAlert.innerHTML = "Booking confirmed! Confirmation email sent!";
    setTimeout(() => {
        bookingAlert.innerHTML = "";
        bookingAlert.classList.remove("alert-success");
        bookingAlert.hidden = true;
    }, 3000)
})

