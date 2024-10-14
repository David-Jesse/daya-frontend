const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".mobile-menu");
const mobileMenu = document.getElementById('mobile-menu')

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenu) {
        mobileMenu.removeAttribute('id');
    }
}

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    //navLinks.classList.toggle("active");
    mobileMenu.classList.toggle('active')
});

document.getElementById("mobile-menu").forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    mobileMenu.classList.remove("active")
}))