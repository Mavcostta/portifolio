// ===================================
// JAVASCRIPT DO PORTFÓLIO
// ===================================

// ===================================
// LOADING SCREEN
// ===================================
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loadingScreen");

  // Aguarda 2 segundos para o loading
  setTimeout(function () {
    loadingScreen.classList.add("hidden");

    // Remove do DOM após a transição
    setTimeout(function () {
      loadingScreen.style.display = "none";
    }, 500);
  }, 2000);
});

// Este código será executado quando a página carregar completamente
document.addEventListener("DOMContentLoaded", function () {
  // ===================================
  // MENU MOBILE (Hamburguer)
  // ===================================

  // Seleciona elementos do DOM (Document Object Model)
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  // Adiciona evento de clique no botão do menu
  menuToggle.addEventListener("click", function () {
    // Toggle = adiciona se não tiver, remove se tiver
    navLinks.classList.toggle("active");

    // Anima o botão hamburguer virando um X
    this.classList.toggle("active");
  });

  // Fecha o menu quando clicar em um link
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  // ===================================
  // SCROLL SUAVE (Smooth Scroll)
  // ===================================

  // Quando clicar em um link da navegação, rola suavemente até a seção
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      // Previne o comportamento padrão do link
      e.preventDefault();

      // Pega o href do link (exemplo: #sobre)
      const targetId = this.getAttribute("href");

      // Encontra o elemento com esse ID
      const targetSection = document.querySelector(targetId);

      // Rola até o elemento de forma suave
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth", // Animação suave
          block: "start", // Alinha no topo
        });
      }
    });
  });

  // ===================================
  // DESTAQUE DO MENU CONFORME A POSIÇÃO
  // ===================================

  // Seleciona todas as seções
  const sections = document.querySelectorAll("section");

  // Função que verifica qual seção está visível
  function highlightMenu() {
    // Pega a posição atual do scroll
    const scrollPosition = window.scrollY + 100;

    // Para cada seção, verifica se está visível
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      // Se estamos dentro dessa seção
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        // Remove a classe 'active' de todos os links
        links.forEach(function (link) {
          link.classList.remove("active-link");
        });

        // Adiciona a classe 'active' no link correspondente
        const activeLink = document.querySelector(
          '.nav-links a[href="#' + sectionId + '"]'
        );
        if (activeLink) {
          activeLink.classList.add("active-link");
        }
      }
    });
  }

  // Executa a função quando o usuário rolar a página
  window.addEventListener("scroll", highlightMenu);

  // ===================================
  // ANIMAÇÃO DE ENTRADA DOS CARDS
  // ===================================

  // Seleciona todos os cards de habilidades e projetos
  const cards = document.querySelectorAll(
    ".habilidade-card, .projeto-card, .timeline-item"
  );

  // Função que verifica se o elemento está visível na tela
  function revealCards() {
    cards.forEach(function (card) {
      // Pega a posição do card
      const cardTop = card.getBoundingClientRect().top;
      // Pega a altura da janela
      const windowHeight = window.innerHeight;

      // Se o card está visível (80% da janela)
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

  // Executa quando o usuário rolar
  window.addEventListener("scroll", revealCards);

  // Executa uma vez no carregamento da página
  revealCards();

  // ===================================
  // CONSOLE MESSAGE (Para recrutadores)
  // ===================================

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
      setTimeout(typeWriter, 80); // Velocidade da digitação (80ms por letra)
    }
  }

  // Inicia a digitação após 500ms
  setTimeout(typeWriter, 500);

  // ===================================
  // CURSOR PERSONALIZADO
  // ===================================
  const cursor = document.querySelector(".custom-cursor");
  const cursorDot = document.querySelector(".custom-cursor-dot");

  // Atualiza posição do cursor
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

  // ===================================
  // ANIMAÇÃO DOS CONTADORES
  // ===================================
  // Função para calcular meses codando desde outubro de 2024
  function calculateMonthsCoding() {
    const startDate = new Date(2024, 9, 1); // Outubro de 2024 (mês 9 = outubro)
    const today = new Date();

    const yearsDiff = today.getFullYear() - startDate.getFullYear();
    const monthsDiff = today.getMonth() - startDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;

    return totalMonths;
  }

  // Atualizar o contador de meses
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

// ===================================
// NOTAS DE ESTUDO PARA VOCÊ
// ===================================

/*
CONCEITOS IMPORTANTES USADOS NESTE CÓDIGO:

1. DOM (Document Object Model)
   - É como o JavaScript "vê" e manipula o HTML
   - document.querySelector() busca elementos
   - .classList.add/remove/toggle() adiciona/remove classes CSS

2. Event Listeners (Ouvintes de Eventos)
   - addEventListener('click', function) executa código quando algo acontece
   - Tipos comuns: 'click', 'scroll', 'load'

3. Arrow Functions vs Functions normais
   - function() { } = função tradicional
   - () => { } = arrow function (forma mais moderna)
   - Ambas funcionam de forma similar

4. forEach()
   - Percorre cada item de uma lista
   - Exemplo: links.forEach(function(link) { ... })

5. Métodos úteis:
   - querySelector() = busca 1 elemento
   - querySelectorAll() = busca vários elementos
   - getAttribute() = pega um atributo do HTML
   - scrollIntoView() = rola até um elemento

DESAFIO PARA VOCÊ:
- Tente adicionar um botão "Voltar ao Topo"
- Experimente mudar as cores no CSS
- Adicione mais animações quando passar o mouse
- Console.log() é seu amigo para debugar!
*/
