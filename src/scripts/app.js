// Page raceimpact carousel des conséquences + et - 
const positiveBox = document.getElementById("positive-box");
if (positiveBox){

  const positiveItems = [
    {
      text : "<strong class='highlight'>Expérience unique</strong> L’expérience est comparable à un saut en parachute car ça permet de prouver le courage, le dépassement de soi, la capacité a gérer le stress, ça peut créer des codes sociaux car participer l’expérience devient un passage quasi obligatoire comme le permis à l’heure actuelle",
      image: "/projets/tfa/assets/img/CP1.jpg",
    },
    {
      text : "<strong class='highlight'>Nouveau talent détectés </strong> grâce au IA qui analyse les performances, de vrais professionnel viennent du virtuel sans passer par les circuits traditionnels et le parcours habituel du karting puis formule 4, formule 3, formule 2 et puis formule 1. Il y a une valorisation des talents",
      image : "/projets/tfa/assets/img/CP2.jpg",
    },
    {
      text : "<strong class='highlight'>Création de nouveaux métiers</strong> De nouvelles professions pourraient émerger, comme des coachs mentaux spécialisés dans l’accompagnement des utilisateurs de simulateurs afin de les aider à gérer le stress et la pression. On pourrait également voir apparaître des designers d’expériences immersives dans d’autres domaines. Cette évolution favoriserait aussi le développement des technologies",
      image : "/projets/tfa/assets/img/CP3.jpg",
    },
  ];
  
  const negativeItems = [
    {
      text : "<strong class='highlight'>Comparaison avec les pilotes réels</strong> Les utilisateurs sont classés et comparés aux vrais pilotes, ce qui peut entraîner une baisse de confiance en soi et une forte pression. Certains peuvent se dire qu’ils veulent atteindre le niveau de pilotes comme Lando Norris. Au-delà de cette comparaison, une hiérarchie sociale peut aussi se créer, les utilisateurs étant jugés en fonction de leurs performances",
      image : "/projets/tfa/assets/img/CN1.jpg",
    },
    {
      text : "<strong class='highlight'>Addiction</strong>Grâce à des simulateurs très performants, certains utilisateurs peuvent délaisser leurs autres activités pour retrouver ces fortes sensations. Ils cherchent alors en permanence des sensations intenses et la performance, ce qui peut entraîner une forme de dépendance",
      image : "/projets/tfa/assets/img/CN2.jpg",
    },
    {
      text : "<strong class='highlight'>Aspect social</strong>Sur le long terme, les utilisateurs pourraient vivre cette expérience depuis leur domicile, ce qui risquerait de les isoler des interactions sociales. Ils pourraient également réduire leurs activités sportives, entraînant une plus grande sédentarité. Avec des simulations accessibles en permanence, certains seraient tentés d’en abuser, ce qui pourrait devenir problématique sur le plan mental en cas d’usage excessif",
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
      text.innerHTML = items[index].text; // changer le text
      box.style.backgroundImage = `url("${items[index].image}")`; // changer l'image
    }
    
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

const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__el a");

if(menuToggle){
    // click sur le bouton
    menuToggle.addEventListener("click", menuOpen);

    // click sur les liens 
    for(let menuLink of menuLinks){
        menuLink.addEventListener("click", menuOpen);
    }
}
// function pour ouvrir et fermer le menu
function menuOpen(){
    menu.classList.toggle("menu--open");
}

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.intro, .role');

  // On vérifie qu'au moins un élément existe sur la page actuelle
  if (sections.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    sections.forEach(section => observer.observe(section));
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const car = document.getElementById('scrollingCar');
    const main = document.querySelector('main');

    function updateCarPosition() {
        if (!car || !main) return;

        // Position de départ et hauteur totale défilable de la zone main
        const mainRect = main.getBoundingClientRect();
        const mainTop = window.scrollY + mainRect.top;
        const mainHeight = main.offsetHeight - window.innerHeight;

        // Position actuelle du scroll par rapport au haut de <main>
        const scrollPosition = window.scrollY - mainTop;

        // Calcul du pourcentage (entre 0 et 1)
        let progress = scrollPosition / mainHeight;
        
        // Empêche la voiture de sortir des bornes 0% - 100%
        progress = Math.max(0, Math.min(1, progress));

        // Calcul du déplacement maximal (largeur de la piste minus la largeur de la voiture)
        const trackWidth = car.parentElement.clientWidth - car.clientWidth;
        const translateX = progress * trackWidth;

        // Application de la transformation
        car.style.transform = `translateX(${translateX}px)`;
    }

    // Écoute de l'événement scroll
    window.addEventListener('scroll', updateCarPosition, { passive: true });
    window.addEventListener('resize', updateCarPosition);
    
    // Initialisation
    updateCarPosition();
});

document.addEventListener("DOMContentLoaded", () => {
  const tracks = document.querySelectorAll(".circuit-line .track");

  if (tracks.length === 0) return;

  // Calcul de la longueur totale de chaque ligne et masque initial
  const trackData = Array.from(tracks).map((track) => {
    const length = track.getTotalLength();
    track.style.strokeDasharray = length;
    track.style.strokeDashoffset = length;
    return { element: track, length: length };
  });

  function updateTrackProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    // Pourcentage de scroll global (entre 0 et 1)
    const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));

    // Réduction du décalage pour faire apparaître le tracé
    trackData.forEach(({ element, length }) => {
      const drawLength = length * scrollFraction;
      element.style.strokeDashoffset = length - drawLength;
    });
  }

  // Écoute du défilement avec paramètre passif pour préserver la fluidité
  window.addEventListener("scroll", updateTrackProgress, { passive: true });

  // Exécution initiale au chargement
  updateTrackProgress();
});