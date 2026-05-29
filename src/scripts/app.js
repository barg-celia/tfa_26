const positiveBox = document.getElementById("positive-box");
if (positiveBox){

  const positiveItems = [
    {
      text : "Expérience unique (peut être addictive) → l’expérience est comparable à un saut en parachute car ça permet de prouver le courage, le dépassement de soi, la capacité à gérer le stress.",
      image : "../../assets/img/",
    },
    {
      text : "text2",
      image : "../../assets/img/",
    },
    {
      text : "Text3",
      image : "../../assets/img/",
    },
  ];
  
  const negativeItems = [
    {
      text : "Text1",
      image : "../../assets/img/",
    },
    {
      text : "text2",
      image : "../../assets/img/",
    },
    {
      text : "Text3",
      image : "../../assets/img/",
    },
  ];
  
  // fct carousel : items = la liste des éléments, boxId = id de la boite, textId = id du text ,btn class = la class du btn ,prevId = btn précédent, nextId = btn suivant
  function setupCarousel(items, boxId, textId, btnClass, prevId, nextId) {
    let index = 0;
    
    const box = document.getElementById(boxId); // récuperer l'id de la box
    const overlay = box.querySelector(".overlay"); // cherche dans la box l'élément overlay
    const btn = box.querySelector(btnClass); // cherche le btn avec la classe passée
    const text = document.getElementById(textId); // récupere l'id du text
    
    const prevBtn = document.getElementById(prevId); // récuperer le btn prev
    const nextBtn = document.getElementById(nextId); // récuperer le btn next
    
    function updateContent() { // fct pour changer l'affichage
      text.textContent = items[index].text; // changer le text
      box.style.backgroundImage = `url("${items[index].image}")`; // changer l'image
    }
    
    // btn pour afficher ou masquer le text
    btn.addEventListener("click", () => {
      overlay.classList.toggle("active");
      
      btn.textContent = overlay.classList.contains("active")
      ? "Cacher"
      : "Afficher";
    });
    
    // btn next 
    nextBtn.addEventListener("click", () => {
      index++; 
      
      if (index >= items.length) {
        index = 0;
      }
      
      updateContent();
    });
    
    // btn prev
    prevBtn.addEventListener("click", () => {
      index--;
      
      if (index < 0) {
        index = items.length - 1;
      }
      
      updateContent();
    });
    
    updateContent();
  }
  
  // Appeler la fct positive
  setupCarousel(
    positiveItems,
    "positive-box",
    "positive-text",
    ".positive-btn",
    "prev-positive",
    "next-positive"
  );
  
  // Appeler la fct négative
  setupCarousel(
    negativeItems,
    "negative-box",
    "negative-text",
    ".negative-btn",
    "prev-negative",
    "next-negative"
  );
}