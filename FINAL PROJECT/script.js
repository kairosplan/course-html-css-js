const countDownDate = new Date("Nov 11, 2024 20:00:00").getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Check if the countdown is over
  if (distance < 0) {
    clearInterval(countdownFunction); // Stop the countdown
    document.querySelector("#countdown").innerHTML = "<h3>Offer Expired</h3>";
    return;
  }

  // Calculate days, hours, minutes, and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in a single element
  document.querySelector("#countdown").innerHTML = `
    ${days}d ${hours}h ${minutes}m ${seconds}s
  `;
}, 1000);
