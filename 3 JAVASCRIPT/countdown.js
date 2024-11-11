document.addEventListener("DOMContentLoaded", () => {
  const endDate = new Date("Nov 11, 2025 15:22:40").getTime();

  setInterval(countdown, 1000);

  function countdown() {
    const paragraph = document.getElementById("countdown");

    const now = new Date().getTime();
    const difference = endDate - now;

    if (difference < 0) {
      paragraph.textContent = "Offer expired";
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // console.log({ days, hours, minutes, seconds });

    const message = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds left`;

    paragraph.textContent = message;
  }
});

/*

70 minutes to hours ?

130 / 60 = 2.16 => Hours = 1 | Minutes = 10 => 1h 10m

130 - 60 * 2 (hours) = 10 minutes => 2h 10m

70 % 60 = 10 minutes
130 % 60 = 10 minutes

*/
