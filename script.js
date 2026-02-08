const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const noSound = document.getElementById("noSound");
const yesSound = document.getElementById("yesSound");
const yesBtn = document.getElementById("yesBtn");

function moveNoButton() {
  noSound.currentTime = 0;
  noSound.play();

  const rect = card.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();
  const padding = 20;

  const x = Math.random() * (rect.width - btn.width - padding);
  const y = Math.random() * (rect.height - btn.height - padding);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  yesSound.currentTime = 0;
  yesSound.play();

  card.innerHTML = `
    <h1>YAYYYY 🎉</h1>
    <p>You just made my day 🥰</p>

    <img
      src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3JqcGtycDcyOW9pMTJ4NzBleW1jdXJ5ZDhxdmd1N2hmNTliMzY4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5vef4sn8zhnlC/giphy.gif"
      class="final-gif"
      alt="celebration"
    />
  `;

  /* 💖 Start floating hearts */
  const heartInterval = setInterval(createHeartParticle, 400);

  /* stop after 6 seconds (keeps it classy) */
  setTimeout(() => {
    clearInterval(heartInterval);
  }, 6000);
});

function createHeartParticle() {
  const hearts = ["💖", "💗", "💕", "💘", "💞"];
  const heart = document.createElement("div");

  heart.className = "heart-particle";
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

  const startX = Math.random() * 100;
  const drift = (Math.random() * 40) - 20; // left / right drift

  heart.style.left = startX + "vw";
  heart.style.fontSize = 14 + Math.random() * 20 + "px";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heart.style.transform = `translateX(${drift}px)`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}
