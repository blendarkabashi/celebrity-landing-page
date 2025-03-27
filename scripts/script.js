function updateTimer() {
  const countDownDate = new Date(Date.now() + 24 * 60 * 60 * 1000).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".countdown-container").innerHTML =
        "OFFER EXPIRED";
    }
  }

  update();
  const timer = setInterval(update, 1000);
}

document.addEventListener("DOMContentLoaded", updateTimer);
