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

  // Animation des sections au scroll
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('timeline-item')) {
          // Pour les éléments de la timeline, ajouter un délai progressif
          const delay = Array.from(document.querySelectorAll('.timeline-item')).indexOf(entry.target) * 200;
          entry.target.style.transitionDelay = `${delay}ms`;
        }
        entry.target.classList.add('show');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  });

  // Observer les éléments de la timeline
  document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    observer.observe(item);
  });

  // Observer les éléments avec animation fadeInUp
  document.querySelectorAll('.animate-fadeInUp').forEach(item => {
    observer.observe(item);
  });

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
});
