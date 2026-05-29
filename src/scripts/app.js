const positiveItems = [
  {
    text : "Expérience unique (peut être addictive) → l’expérience est comparable à un saut en parachute car ça permet de prouver le courage, le dépassement de soi, la capacité à gérer le stress.",
    image : "images/positive1.jpg",
  },
  {
    text : "text2",
    image : "images/positive2.jpg",
  },
  {
    text : "Text3",
    image : "images/positive3.jpg",
  },
];

const negativeItems = [
  {
    text : "Text1",
    image : "images/negative1.jpg",
  },
  {
    text : "text2",
    image : "images/negative2.jpg",
  },
  {
    text : "Text3",
    image : "images/negative3.jpg",
  },
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

if (btn && overlay){
  btn.addEventListener("click", () => {
    overlay.classList.toggle("active");
  
    btn.textContent = overlay.classList.contains("active")
      ? "Cacher"
      : "Afficher";
  });
}

if (nextBtn){
  nextBtn.addEventListener("click", () => {
    index++;
  
    if (index >= consequences.length) {
      index = 0;
    }
  
    updateText();
  });
}

if(prevBtn){
  prevBtn.addEventListener("click", () => {
    index--;
  
    if (index < 0) {
      index = consequences.length - 1;
    }
  
    updateText();
  });
}