
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loadingScreen");

 
  setTimeout(function () {
    loadingScreen.classList.add("hidden");

   
    setTimeout(function () {
      loadingScreen.style.display = "none";
    }, 500);
  }, 2000);
});


document.addEventListener("DOMContentLoaded", function () {
  // ===================================
  // MENU MOBILE (Hamburguer)
  // ===================================

 
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");


  menuToggle.addEventListener("click", function () {
    
    navLinks.classList.toggle("active");

  
    this.classList.toggle("active");
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  // ===================================
  // SCROLL SUAVE (Smooth Scroll)
  // ===================================

  
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      
      e.preventDefault();

      
      const targetId = this.getAttribute("href");

      
      const targetSection = document.querySelector(targetId);

     
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth", 
          block: "start", 
        });
      }
    });
  });

  const sections = document.querySelectorAll("section");

  
  function highlightMenu() {
   
    const scrollPosition = window.scrollY + 100;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      // Se estamos dentro dessa seção
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        
        links.forEach(function (link) {
          link.classList.remove("active-link");
        });

        
        const activeLink = document.querySelector(
          '.nav-links a[href="#' + sectionId + '"]'
        );
        if (activeLink) {
          activeLink.classList.add("active-link");
        }
      }
    });
  }


  window.addEventListener("scroll", highlightMenu);

  const cards = document.querySelectorAll(
    ".habilidade-card, .projeto-card, .timeline-item"
  );

  function revealCards() {
    cards.forEach(function (card) {
      
      const cardTop = card.getBoundingClientRect().top;
      
      const windowHeight = window.innerHeight;

      
      if (cardTop < windowHeight * 0.8) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  }

  // Aplica estilo inicial nos cards (invisível e mais abaixo)
  cards.forEach(function (card) {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });


  window.addEventListener("scroll", revealCards);

  
  
  console.log(
    "%c👋 Olá, recrutador!",
    "font-size: 20px; font-weight: bold; color: #2563eb;"
  );
  console.log(
    "%cObrigada por visitar meu portfólio!",
    "font-size: 14px; color: #6b7280;"
  );
  console.log(
    "%cEstou em constante aprendizado e evolução. 🚀",
    "font-size: 14px; color: #6b7280;"
  );
  console.log(
    "%c1 ano de programação e contando...",
    "font-size: 12px; font-style: italic; color: #9ca3af;"
  );

  // ===================================
  // BARRA DE PROGRESSO DE LEITURA
  // ===================================
  const progressBar = document.getElementById("progressBar");

  window.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const scrollPercentage =
      (scrollTop / (documentHeight - windowHeight)) * 100;
    progressBar.style.width = scrollPercentage + "%";
  });

  // ===================================
  // EFEITO DE DIGITAÇÃO
  // ===================================
  const typingText = document.querySelector(".typing-text");
  const textToType = "eu crio interfaces para a web.";
  let charIndex = 0;

  function typeWriter() {
    if (charIndex < textToType.length) {
      typingText.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 80);
    }
  }

 
  setTimeout(typeWriter, 500);

  const cursor = document.querySelector(".custom-cursor");
  const cursorDot = document.querySelector(".custom-cursor-dot");

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    cursorDot.style.left = x + "px";
    cursorDot.style.top = y + "px";
  });

  // Efeito ao passar por links e botões
  const hoverElements = document.querySelectorAll(
    "a, button, .projeto-card, .stat-card"
  );

  hoverElements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      cursor.style.transform = "scale(1.5)";
      cursor.style.backgroundColor = "rgba(100, 255, 218, 0.1)";
    });

    element.addEventListener("mouseleave", function () {
      cursor.style.transform = "scale(1)";
      cursor.style.backgroundColor = "transparent";
    });
  });

  // ===================================
  // BOTÃO VOLTAR AO TOPO
  // ===================================
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  function calculateMonthsCoding() {
    const startDate = new Date(2024, 9, 1); 
    const today = new Date();

    const yearsDiff = today.getFullYear() - startDate.getFullYear();
    const monthsDiff = today.getMonth() - startDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;

    return totalMonths;
  }

  
  const monthsElement = document.getElementById("months-coding");
  if (monthsElement) {
    const months = calculateMonthsCoding();
    monthsElement.setAttribute("data-target", months);
  }

  function animateCounter(element) {
    const target = parseInt(element.getAttribute("data-target"));
    let current = 0;
    const increment = target / 50;

    const timer = setInterval(function () {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 40);
  }

  let statsAnimated = false;

  window.addEventListener("scroll", function () {
    if (statsAnimated) return;

    const statsSection = document.querySelector(".stats-section");
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      statsAnimated = true;
      const statNumbers = document.querySelectorAll(".stat-number");

      statNumbers.forEach(function (stat) {
        animateCounter(stat);
      });
    }
  });
});
