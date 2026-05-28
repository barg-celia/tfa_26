const consequences = [
  "Expérience unique (peut être addictive) → l’expérience est comparable à un saut en parachute car ça permet de prouver le courage, le dépassement de soi, la capacité à gérer le stress.",

  "Deuxième conséquence → ici tu mets ton deuxième texte.",

  "Troisième conséquence → ici tu mets ton troisième texte."
];

let index = 0;

const btn = document.querySelector(".btn");
const overlay = document.querySelector(".image-box .overlay");
const text = document.getElementById("consequence-text");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateText() {
  text.textContent = consequences[index];
}

btn.addEventListener("click", () => {
  overlay.classList.toggle("active");

  btn.textContent = overlay.classList.contains("active")
    ? "Cacher"
    : "Afficher";
});

nextBtn.addEventListener("click", () => {
  index++;

  if (index >= consequences.length) {
    index = 0;
  }

  updateText();
});

prevBtn.addEventListener("click", () => {
  index--;

  if (index < 0) {
    index = consequences.length - 1;
  }

  updateText();
});