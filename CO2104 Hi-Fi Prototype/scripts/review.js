const addReviewButton = document.querySelector('.add-review');
const postReviewDialog = document.querySelector('.post-review');
const stars = document.querySelectorAll('.rating .fa-regular');
const ratingInput = document.getElementById('rating');
const opinionTextarea = document.getElementById('opinion');
const submitButton = document.querySelector('.submit-review');
const cancelButton = document.querySelector('.cancel');


addReviewButton.addEventListener('click', () => {
    postReviewDialog.showModal();
});


stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        resetStars();
        highlightStars(index);
        ratingInput.value = index + 1;
    });
});

function resetStars() {
    stars.forEach(star => {
        star.classList.remove("fa-solid")
    });
    ratingInput.value = ""
}

function highlightStars(index) {
    for (let i = 0; i <= index; i++) {
        stars[i].classList.add("fa-solid")
    }
}

function createStars(rating) {
    let stars = " "
    for (let i = 1; i <= rating; i++) {
        stars += '<i class="fa-solid fa-star"></i> ';
    }
    return stars
}

function addReview(rating, opinion) {
    const reviews = document.querySelector(".reviews");
    let username = localStorage.getItem("username");
    let pfp = localStorage.getItem("profilePicture");
    let review = `<div class="review">
    <div class="user-info">
        <div class="info">
            <img class="user-pfp" src="${pfp}" alt="User 1 profile picture">
            <h2 class="user-name">${username}</h2>
        </div>
        <div class="stars">${createStars(rating)}</div>
    </div>
    <div class="review-left">${opinion}</div>`

    reviews.innerHTML += review;    
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const rating = parseInt(ratingInput.value);
    const opinion = opinionTextarea.value.trim();
    
    if (rating) {
        addReview(rating, opinion);
        resetStars();
        opinionTextarea.value = '';
        postReviewDialog.close();
    } else {
        let alertMsg = document.querySelector(".alert");
        alertMsg.hidden = false;
        setTimeout(() => {
            alertMsg.hidden = true;
        }, 2000);
    }
});

cancelButton.addEventListener('click', (event) => {
    event.preventDefault()
    resetStars();
    opinionTextarea.value = '';
    postReviewDialog.close();
});