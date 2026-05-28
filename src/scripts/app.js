const btn = document.querySelector(".btn");
const overlay = document.querySelector(".image-box .overlay");

btn.addEventListener("click", () => {
  overlay.classList.toggle("active");

  btn.textContent = overlay.classList.contains("active")
    ? "Cacher"
    : "Afficher";
});