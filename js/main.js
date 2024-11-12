document.addEventListener("DOMContentLoaded", () => {
  // Gestion du curseur personnalisé
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");

  if (cursor && cursorFollower) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      setTimeout(() => {
        cursorFollower.style.left = `${e.clientX}px`;
        cursorFollower.style.top = `${e.clientY}px`;
      }, 100);
    });
  }

  // Animation des sections et de la timeline au scroll
  const observerCallback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    }
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  });

  // Observer les éléments avec animation
  const animatedElements = document.querySelectorAll(
    ".animate-fadeInUp, .skill-progress-bar, .timeline-item"
  );
  for (const element of animatedElements) {
    observer.observe(element);
  }

  // Ajouter des délais pour les éléments de la timeline
  const timelineItems = document.querySelectorAll(".timeline-item");
  for (const item of timelineItems) {
    const delay = Array.from(timelineItems).indexOf(item) * 200;
    item.style.transitionDelay = `${delay}ms`;
  }

  // Animation du scroll doux pour les ancres
  const anchors = document.querySelectorAll('a[href^="#"]');
  for (const anchor of anchors) {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  }

  // Initialisation de Swiper si présent sur la page
  if (document.querySelector(".swiper")) {
    new Swiper(".project-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Animation de la timeline des projets
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ajouter un délai progressif pour chaque élément
        const delay = Array.from(document.querySelectorAll('.timeline-item')).indexOf(entry.target) * 200;
        entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '-50px'
  });

  // Observer chaque élément de la timeline
  document.querySelectorAll('.timeline-item').forEach((item) => {
    // Réinitialiser l'état initial
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    timelineObserver.observe(item);
  });
});
