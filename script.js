// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".mobile-menu");
// const mobileMenu = document.getElementById('mobile-menu')

// function closeMobileMenu() {
//     const mobileMenu = document.getElementById('mobile-menu')
//     if (mobileMenu) {
//         mobileMenu.removeAttribute('id');
//     }
// }

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     //navLinks.classList.toggle("active");
//     mobileMenu.classList.toggle('active')
// });

// document.getElementById("mobile-menu").forEach(n => n.addEventListener("click", ()=> {
//     hamburger.classList.remove("active");
//     navLinks.classList.remove("active");
//     mobileMenu.classList.remove("active")
// }))

// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.querySelector('hamburger');
//     const mobileMenu = document.getElementById('mobile-menu');
//     const navRight = document.querySelector('nav-right');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('active');
//         mobileMenu.classList.toggle('active');
//         navRight.style.display = mobileMenu.classList.contains('active') ? 'none' : 'flex';
//     })
// })

// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.querySelector('.hamburger');
//     const mobileMenu = document.getElementById('mobile-menu');
//     const navRight = document.querySelector('.nav-right');

//     if (!hamburger) {
//         console.error("Hamburger element not found");
//         return;
//     }
//     if (!mobileMenu) {
//         console.error("Mobile menu element not found");
//         return;
//     }
//     if (!navRight) {
//         console.error("Nav right element not found");
//         return;
//     }

//     console.log("Elements found:", { hamburger, mobileMenu, navRight });

//     hamburger.addEventListener('click', () => {
//         console.log("Hamburger clicked");
//         hamburger.classList.toggle('active');
//         mobileMenu.classList.toggle('active');
        
//         if (mobileMenu.classList.contains('active')) {
//             mobileMenu.style.display = 'flex';
//             navRight.style.display = 'none';
//         } else {
//             mobileMenu.style.display = 'none';
//             navRight.style.display = 'flex';
//         }
        
//         console.log("Menu display:", mobileMenu.style.display);
//         console.log("Nav right display:", navRight.style.display);
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.hamburger');
//     const mobileMenu = document.getElementById('mobile-menu');

//     hamburger.addEventListener('click', () => {
//         mobileMenu.classList.toggle('active');
//         hamburger.classList.toggle('active');
//     });
// });


// document.querySelectorAll('mobile-menu', 'hamburger').forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove('active')
//     mobileMenu.classList.remove('active')
// }))

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuItems = document.querySelectorAll('.mobile-nav-menu a');
  
    function toggleMenu() {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    }
  
    function closeMenu() {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  
    hamburger.addEventListener('click', toggleMenu);
  
    mobileMenuItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });
  });