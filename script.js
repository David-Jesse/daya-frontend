const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-right");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-right").forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}))