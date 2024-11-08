// Countdown Timer Script

// Set the date we're counting down to
const countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
const countdownfunction = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the time remaining
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the results in the elements with respective IDs
  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.querySelector(".countdown").innerHTML = "<h3>Offer Expired</h3>";
  }
}, 1000);

// Hamburger Menu Toggle Script

// Select the menu toggle icon and navigation links
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Add event listener to toggle the navigation menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-links-active");
});

// Close the menu when a link is clicked (mobile devices)
navLinks.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    navLinks.classList.remove("nav-links-active");
  }
});
