// ========== ANIMATIONS AVANCÉES - Une Empreinte ==========

document.addEventListener('DOMContentLoaded', () => {
  // ========== PARTICULES FLOTTANTES ==========
  function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'floating-particles';
    document.body.appendChild(particlesContainer);

    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Position et délai aléatoires
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${15 + Math.random() * 10}s`;

      particlesContainer.appendChild(particle);
    }
  }

  createFloatingParticles();

  // ========== EFFET PARALLAXE SUR LE SCROLL ==========
  let ticking = false;

  function updateParallax() {
    const scrollY = window.pageYOffset;

    // Parallaxe sur les sections
    document.querySelectorAll('section').forEach((section, index) => {
      if (section.id === 'accueil') return; // Skip hero

      const speed = 0.05 + (index * 0.02);
      const yPos = -(scrollY * speed);
      section.style.transform = `translateY(${yPos}px)`;
    });

    // Parallaxe sur les cartes produits
    document.querySelectorAll('.product-card').forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const distanceFromCenter = (window.innerHeight / 2 - centerY) * 0.02;

      card.style.transform = `translateY(${distanceFromCenter}px)`;
    });

    ticking = false;
  }

  function requestParallaxUpdate() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestParallaxUpdate, { passive: true });

  // ========== EFFET MAGNÉTIQUE SUR LES BOUTONS ==========
  document.querySelectorAll('button, .btn, .hero-cta, .add-to-cart, .add-to-cart-custom').forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.05)`;
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
  });

  // ========== EFFET DE CONFETTI AU CLICK SUR "AJOUTER AU PANIER" ==========
  function createConfetti(x, y) {
    const colors = ['#cfbf7c', '#E8C5C5', '#D4A59A', '#EBD6C4', '#DFC6B0'];
    const confettiCount = 20;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.left = `${x}px`;
      confetti.style.top = `${y}px`;
      confetti.style.width = '8px';
      confetti.style.height = '8px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '9999';
      confetti.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

      document.body.appendChild(confetti);

      const angle = (Math.PI * 2 * i) / confettiCount;
      const velocity = 100 + Math.random() * 100;
      const xVel = Math.cos(angle) * velocity;
      const yVel = Math.sin(angle) * velocity;

      requestAnimationFrame(() => {
        confetti.style.transform = `translate(${xVel}px, ${yVel}px) rotate(${Math.random() * 360}deg) scale(0)`;
        confetti.style.opacity = '0';
      });

      setTimeout(() => confetti.remove(), 800);
    }
  }

  document.addEventListener('click', (e) => {
    const target = e.target.closest('.add-to-cart, .add-to-cart-custom');
    if (target) {
      const rect = target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      createConfetti(x, y);
    }
  });

  // ========== ANIMATION DES PRIX ==========
  function animatePrice(element) {
    const text = element.textContent;
    const numbers = text.match(/\d+/g);

    if (numbers && numbers.length > 0) {
      const targetNumber = parseInt(numbers[0]);
      let currentNumber = 0;
      const increment = Math.ceil(targetNumber / 30);

      const counter = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
          currentNumber = targetNumber;
          clearInterval(counter);
        }
        element.textContent = text.replace(/\d+/, currentNumber);
      }, 50);
    }
  }

  // Observer pour animer les prix quand ils entrent dans la vue
  const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animatePrice(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.text-pink-500, [class*="price"]').forEach(price => {
    if (price.textContent.match(/€|\d+,\d+/)) {
      priceObserver.observe(price);
    }
  });

  // ========== CURSOR TRAIL EFFECT ==========
  let cursorTrail = [];
  const maxTrailLength = 10;

  function createCursorDot(x, y) {
    const dot = document.createElement('div');
    dot.style.position = 'fixed';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.width = '6px';
    dot.style.height = '6px';
    dot.style.background = 'radial-gradient(circle, rgba(207, 191, 124, 0.6), transparent)';
    dot.style.borderRadius = '50%';
    dot.style.pointerEvents = 'none';
    dot.style.zIndex = '9998';
    dot.style.transition = 'all 0.3s ease';

    document.body.appendChild(dot);
    cursorTrail.push(dot);

    if (cursorTrail.length > maxTrailLength) {
      const removed = cursorTrail.shift();
      removed.style.opacity = '0';
      removed.style.transform = 'scale(0)';
      setTimeout(() => removed.remove(), 300);
    }

    setTimeout(() => {
      dot.style.opacity = '0';
      dot.style.transform = 'scale(0)';
    }, 300);
  }

  let lastCursorUpdate = 0;
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastCursorUpdate > 50) {
      createCursorDot(e.clientX, e.clientY);
      lastCursorUpdate = now;
    }
  });

  // ========== EFFET DE TILT 3D SUR LES CARTES ==========
  document.querySelectorAll('.product-card, .testimonial-modern').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ========== ANIMATION DE SCROLL FLUIDE ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1200;
        let start = null;

        function animation(currentTime) {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutCubic(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t * t + b;
          t -= 2;
          return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
      }
    });
  });

  // ========== RÉVÉLATION DES ÉLÉMENTS AVEC VARIATIONS ==========
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Ajouter une variété d'animations
        const variations = ['slide-right', 'slide-left', 'rotate-in'];
        const randomVariation = variations[index % variations.length];

        if (!entry.target.classList.contains('in-view')) {
          entry.target.classList.add(randomVariation);
        }

        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  console.log('✨ Animations avancées chargées avec succès!');
});
