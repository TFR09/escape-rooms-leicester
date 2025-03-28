const hamburgerIcon = document.querySelector(".hamburger-icon"),
        menu = document.querySelector(".hamburger-menu"),
        closeMenu = document.querySelector(".close-menu"),
        body = document.querySelector("body");



hamburgerIcon.addEventListener("click", () => {
    menu.style.display = "flex";
    body.style.overflow = "hidden"
})

closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    body.style.overflow = "scroll";
})


// To highlight current active navbar page
const currentPath = window.location.pathname;
const navbarLinks = document.querySelectorAll('.link a');

navbarLinks.forEach(link => {
    if (currentPath.includes(link.getAttribute('href'))) {
        link.parentNode.classList.add('active-link');
    }
});