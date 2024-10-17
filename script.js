const hamburger = document.querySelector(".hamburger");
 const mobileMenu = document.getElementById("mobile-menu");
 const mobileMenuItems = document.querySelectorAll(".mobile-nav-menu a");

 function toggleMenu() {
   hamburger.classList.toggle("active");
   mobileMenu.classList.toggle("active");
   mobileMenu.style.setProperty("display", "block")
 }

 function closeMenu() {
   hamburger.classList.remove("active");
   mobileMenu.classList.remove("active");
   mobileMenu.style.setProperty("display", "none");
 }

  hamburger.addEventListener("click", toggleMenu);

  mobileMenuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    if(windowWidth > 700) {
      mobileMenu.style.setProperty("display", "none");
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
    }
    console.log(`Width: ${windowWidth}, Height: ${windowHeight}`);
  });


// Function to toggle dropdown visibility
// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the arrow element by class
  const arrowDown = document.querySelector('.arrow-down');
  
  // Add an event listener to the arrow element
  arrowDown.addEventListener('click', toggleDropdown);
});

function toggleDropdown(event) {

  // Toggle the dropdown visibility
  const dropdown = document.getElementById('dropdown');
  dropdown.classList.toggle('show');  // Show/hide the dropdown
  
  // Toggle the arrow rotation
  const arrowDown = document.querySelector('.arrow-down');
  arrowDown.classList.toggle('rotate');
}


//Fetch user country flag based on IP (same as before)
async function fetchCountryData() {
  try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();

      const countryCode = data.country_code;
      const countryName = data.country_name;

      // Set the country flag and name in the HTML
      document.getElementById('country-flag').src = `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`;

  } catch (error) {
      console.error('Error fetching country data:', error);
  }
}

//Call the function on page load
window.onload = fetchCountryData;

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//       var latitude = position.coords.latitude;
//       var longitude = position.coords.longitude;
//       console.log("Latitude: " + latitude + ", Longitude: " + longitude);
      
//       // You can use these coordinates to further process or display location information
//   });
// } else {
//   console.log("Geolocation is not supported by this browser.");
// }