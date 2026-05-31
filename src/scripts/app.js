// Page raceimpact carousel des conséquences + et - 
const positiveBox = document.getElementById("positive-box");
if (positiveBox){

  const positiveItems = [
    {
      text : "Expérience unique, voire potentiellement addictive : elle s’apparente à un saut en parachute, dans la mesure où elle permet de démontrer son courage, de se dépasser et de tester sa capacité à gérer le stress. Elle peut aussi générer des codes sociaux, en devenant une étape presque incontournable — un peu comme l’obtention du permis de conduire aujourd’hui",
      image : "../../assets/img/CP1.png",
    },
    {
      text : "Nouveaux talents détectés grâce aux simulations : l’IA analyse les performances et permet à de véritables professionnels d’émerger depuis le virtuel, sans passer par les circuits traditionnels (karting, puis Formule 4, Formule 3, Formule 2 et enfin Formule 1). Cela contribue à une nouvelle forme de valorisation des talent",
      image : "../../assets/img/CP2.png",
    },
    {
      text : "Création de nouveaux métiers : de nouvelles professions pourraient émerger, comme des coachs mentaux spécialisés dans l’accompagnement des utilisateurs de simulateurs afin de les aider à gérer le stress et la pression. On pourrait également voir apparaître des designers d’expériences immersives dans d’autres domaines. Cette évolution favoriserait aussi le développement des technologies",
      image : "../../assets/img/CP3.png",
    },
  ];
  
  const negativeItems = [
    {
      text : "Comparaison avec les pilotes réels : les utilisateurs sont classés et comparés aux vrais pilotes, ce qui peut entraîner une baisse de confiance en soi et une forte pression. Certains peuvent se dire qu’ils veulent atteindre le niveau de pilotes comme Lando Norris. Au-delà de cette comparaison, une hiérarchie sociale peut aussi se créer, les utilisateurs étant jugés en fonction de leurs performances",
      image : "../../assets/img/CN1.png",
    },
    {
      text : "Grâce à des simulateurs très performants, certains utilisateurs peuvent délaisser leurs autres activités pour retrouver ces fortes sensations. Ils cherchent alors en permanence des sensations intenses et la performance, ce qui peut entraîner une forme de dépendance",
      image : "../../assets/img/CN2.png",
    },
    {
      text : "Aspect social : à long terme, les utilisateurs pourraient vivre cette expérience depuis leur domicile, ce qui risquerait de les isoler des interactions sociales. Ils pourraient également réduire leurs activités sportives, entraînant une plus grande sédentarité. Avec des simulations accessibles en permanence, certains seraient tentés d’en abuser, ce qui pourrait devenir problématique sur le plan mental en cas d’usage excessif",
      image : "../../assets/img/CN3.png",
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


document.addEventListener("DOMContentLoaded", () => {
    if (!document.body.classList.contains('body')) {
        return; 
    }
    const nodes = document.querySelectorAll('.node');
    
    // Fonction pour appliquer les bonnes coordonnées de lignes SVG
    function updateLines() {
        const isPC = window.innerWidth >= 1024;
        
        if (isPC) {
            // Coordonnées des lignes pour la version PC (3 haut, 1 bas)
            document.getElementById('path-career').setAttribute('d', 'M 0 0 L 150 160');
            document.getElementById('path-paddock').setAttribute('d', 'M 0 0 L 0 170');
            document.getElementById('path-setup').setAttribute('d', 'M 0 0 L -120 150');
            document.getElementById('path-impact').setAttribute('d', 'M 0 0 L 0 -100');
        } else {
            // Coordonnées des lignes pour la version Mobile (2 gauche vers le bas, 2 droite vers le bas)
            document.getElementById('path-career').setAttribute('d', 'M 0 0 L 120 400');
            document.getElementById('path-paddock').setAttribute('d', 'M 0 0 L 115 280');
            document.getElementById('path-setup').setAttribute('d', 'M 0 0 L -120 360');
            document.getElementById('path-impact').setAttribute('d', 'M 0 0 L -125 240');
        }
    }

    // Gestion du clic 
    nodes.forEach(node => {
        node.addEventListener('click', (e) => {
            // Si on est sur PC, on laisse le CSS Hover faire son travail
            if (window.innerWidth >= 1024) return;

            // Si le point est déjà actif sur mobile, on simule l'action/redirection
            if (node.classList.contains('active')) {
                console.log("Navigation vers : " + node.querySelector('.label').innerText);
                return;
            }

            // Sinon, on nettoie et on active le point cliqué
            nodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
        });
    });

    // Écoute le changement de taille de l'écran pour mettre à jour les lignes
    window.addEventListener('resize', updateLines);
    
    // Initialisation au chargement
    updateLines();
});