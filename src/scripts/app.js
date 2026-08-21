// Page raceimpact carousel des conséquences + et - 
const positiveBox = document.getElementById("positive-box");
if (positiveBox){

  const positiveItems = [
    {
      text : "Expérience unique, voire potentiellement addictive : elle s’apparente à un saut en parachute, dans la mesure où elle permet de démontrer son courage, de se dépasser et de tester sa capacité à gérer le stress. Elle peut aussi générer des codes sociaux, en devenant une étape presque incontournable — un peu comme l’obtention du permis de conduire aujourd’hui",
      image: "/projets/tfa/assets/img/CP1.jpg",
    },
    {
      text : "Nouveaux talents détectés grâce aux simulations : l’IA analyse les performances et permet à de véritables professionnels d’émerger depuis le virtuel, sans passer par les circuits traditionnels (karting, puis Formule 4, Formule 3, Formule 2 et enfin Formule 1). Cela contribue à une nouvelle forme de valorisation des talent",
      image : "/projets/tfa/assets/img/CP2.jpg",
    },
    {
      text : "Création de nouveaux métiers : de nouvelles professions pourraient émerger, comme des coachs mentaux spécialisés dans l’accompagnement des utilisateurs de simulateurs afin de les aider à gérer le stress et la pression. On pourrait également voir apparaître des designers d’expériences immersives dans d’autres domaines. Cette évolution favoriserait aussi le développement des technologies",
      image : "/projets/tfa/assets/img/CP3.jpg",
    },
  ];
  
  const negativeItems = [
    {
      text : "Comparaison avec les pilotes réels : les utilisateurs sont classés et comparés aux vrais pilotes, ce qui peut entraîner une baisse de confiance en soi et une forte pression. Certains peuvent se dire qu’ils veulent atteindre le niveau de pilotes comme Lando Norris. Au-delà de cette comparaison, une hiérarchie sociale peut aussi se créer, les utilisateurs étant jugés en fonction de leurs performances",
      image : "/projets/tfa/assets/img/CN1.jpg",
    },
    {
      text : "Grâce à des simulateurs très performants, certains utilisateurs peuvent délaisser leurs autres activités pour retrouver ces fortes sensations. Ils cherchent alors en permanence des sensations intenses et la performance, ce qui peut entraîner une forme de dépendance",
      image : "/projets/tfa/assets/img/CN2.jpg",
    },
    {
      text : "Aspect social : à long terme, les utilisateurs pourraient vivre cette expérience depuis leur domicile, ce qui risquerait de les isoler des interactions sociales. Ils pourraient également réduire leurs activités sportives, entraînant une plus grande sédentarité. Avec des simulations accessibles en permanence, certains seraient tentés d’en abuser, ce qui pourrait devenir problématique sur le plan mental en cas d’usage excessif",
      image : "/projets/tfa/assets/img/CN3.jpg",
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
    if (!document.body.classList.contains("body")) {
      return;
    }
    const nodes = document.querySelectorAll(".node");
    const car = document.getElementById("car");
    if (!car) return;
    function updateLines() {
      const carRect = car.getBoundingClientRect();
      const targets = {
        career: { x: 55, y: 30 },
        paddock: { x: 20, y: 20 },
        setup: { x: 65, y: 85 },
        impact: { x: 10, y: 70 }
      };
      nodes.forEach(node => {
        const dot = node.querySelector(".dot");
        const svg = node.querySelector(".connector-svg");
        const path = node.querySelector(".line");
        if (!dot || !svg || !path) return;
        const dotRect = dot.getBoundingClientRect();
        const dotX = dotRect.left + dotRect.width / 2;
        const dotY = dotRect.top + dotRect.height / 2;
        const svgRect = svg.getBoundingClientRect();
        const x1 = dotX - svgRect.left;
        const y1 = dotY - svgRect.top;
        const target = targets[node.id];
        if (!target) return;
        const carX = carRect.left + (carRect.width * target.x / 100);
        const carY = carRect.top + (carRect.height * target.y / 100);
        const x2 = carX - svgRect.left;
        const y2 = carY - svgRect.top;
        path.setAttribute(
          "d",
          `M ${x1} ${y1} L ${x2} ${y2}`
        );
      });
    }
    nodes.forEach(node => {
      node.addEventListener("click", () => {
        if (window.innerWidth >= 768) {
          return;
        }
        if (node.classList.contains("active")) {
          const link =
            node.querySelector(".label a");
          if (link) {
            link.click();
          }
          return;
        }
        nodes.forEach(n => {
          n.classList.remove("active");
        });
        node.classList.add("active");
      });
    });
    window.addEventListener("resize", updateLines);
    const carImage =
      document.querySelector("#car img");
    if (carImage) {
      carImage.addEventListener(
          "load",
          updateLines
      );
    }
    updateLines();
});

document.addEventListener("DOMContentLoaded", () => {

    const containers = document.querySelectorAll(".container");

    if (containers.length > 0) {

        containers.forEach((container) => {

            container.addEventListener("click", () => {
                container.classList.toggle("active");
            });

        });

    }

});

const transition = document.querySelector('.transition');

document.querySelectorAll('a.js-transition').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const href = link.getAttribute('href');

        transition.classList.add('transition__show');

        setTimeout(() => {
            window.location.href = href;
        }, 850);
    });
});

const zoomOverlay = document.getElementById("zoomOverlay");

document.querySelectorAll(".node").forEach(node => {
  const link = node.querySelector(".label a");

  if (!link) return;

  link.addEventListener("click", (e) => {
    e.preventDefault();

    const url = link.href;

    const rect = node.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    zoomOverlay.style.transformOrigin = `${x}px ${y}px`;

    document.body.classList.add("zooming");
    zoomOverlay.classList.add("active");

    setTimeout(() => {
      window.location.href = url;
    }, 600);
  });
});

