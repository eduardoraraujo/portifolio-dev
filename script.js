// Função para criar partículas de código flutuantes
function createCodeParticles() {
  const header = document.querySelector('header');
  if (!header) return;
  
  const codeSnippets = [
    'function()', 'const =>', '{...}', '<div>', 'import', 'export', 
    'async', 'await', '() =>', 'useState', 'useEffect', 'React',
    'JavaScript', 'CSS', 'HTML', 'Node.js', '{ }', '[ ]', '=>',
    'git commit', 'npm install', 'yarn', 'webpack', 'babel'
  ];
  
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'code-particles';
  
  // Criar partículas iniciais
  for (let i = 0; i < 15; i++) {
    createCodeParticle(particlesContainer, codeSnippets);
  }
  
  header.appendChild(particlesContainer);
  
  // Criar novas partículas periodicamente
  setInterval(() => {
    if (particlesContainer.children.length < 20) {
      createCodeParticle(particlesContainer, codeSnippets);
    }
  }, 2000);
}

function createCodeParticle(container, codeSnippets) {
  const particle = document.createElement('div');
  particle.className = 'code-particle';
  particle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
  
  // Posição e timing aleatórios
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
  particle.style.animationDelay = Math.random() * 5 + 's';
  
  container.appendChild(particle);
  
  // Remover partícula após a animação
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 20000);
}

// Função para criar overlay com blur dinâmico
function createBlurOverlay() {
  const header = document.querySelector('header');
  if (!header) return;
  
  const blurOverlay = document.createElement('div');
  blurOverlay.className = 'blur-overlay';
  header.appendChild(blurOverlay);
  
  // Ajustar blur baseado no scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = 200;
    const blurAmount = Math.min(scrollY / maxScroll * 5, 5);
    blurOverlay.style.backdropFilter = `blur(${blurAmount}px)`;
  });
}

// Função para criar elementos flutuantes animados
function createFloatingElements() {
  const header = document.querySelector('header');
  if (!header) return;
  
  // Criar container para elementos flutuantes
  const floatingContainer = document.createElement('div');
  floatingContainer.className = 'floating-elements';
  
  // Criar elementos flutuantes
  for (let i = 0; i < 8; i++) {
    const element = document.createElement('div');
    element.className = 'floating-element';
    
    // Propriedades aleatórias para cada elemento
    const size = Math.random() * 80 + 40; // 40-120px
    const left = Math.random() * 100; // 0-100%
    const animationDuration = Math.random() * 15 + 20; // 20-35s
    const animationDelay = Math.random() * -20; // 0 a -20s
    
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.left = `${left}%`;
    element.style.animationDuration = `${animationDuration}s`;
    element.style.animationDelay = `${animationDelay}s`;
    
    floatingContainer.appendChild(element);
  }
  
  // Criar efeito de ondas
  const waveElement = document.createElement('div');
  waveElement.className = 'wave-animation';
  floatingContainer.appendChild(waveElement);
  
  header.appendChild(floatingContainer);
}

// Função para animações baseadas no scroll
function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observar elementos para animação
  const elementsToAnimate = document.querySelectorAll(
    '.projectCardBox, .serviceCard, .contactBox, .title'
  );
  
  elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
  });
}

// Scroll suave para âncoras
function smoothScroll() {
  const scrollIcon = document.querySelector('.ph-caret-double-down');
  if (scrollIcon) {
    scrollIcon.addEventListener('click', () => {
      const mainSection = document.querySelector('main');
      const mainTop = mainSection.offsetTop + 50; // Adiciona 20px extras
      window.scrollTo({ 
        top: mainTop,
        behavior: 'smooth'
      });
    });
  }
}

// Efeito parallax sutil
function parallaxEffect() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    
    if (header) {
      header.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
}

// Hover effect para project cards
function enhanceProjectCards() {
  const projectCards = document.querySelectorAll('.projectCardBox');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Funcionalidade do botão "Voltar ao Topo"
function createBackToTopButton() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (!backToTopBtn) return;
  
  // Mostrar/esconder botão baseado no scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Funcionalidade de clique para voltar ao topo
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Inicializar todas as funcionalidades
document.addEventListener('DOMContentLoaded', () => {
  createFloatingElements();
  createCodeParticles();
  createBlurOverlay();
  observeElements();
  smoothScroll();
  parallaxEffect();
  enhanceProjectCards();
  createBackToTopButton();
});

// Adicionar IDs às seções para navegação
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const aside = document.querySelector('aside');
  const footer = document.querySelector('footer');
  
  if (header) header.id = 'header';
  if (main) main.id = 'main';
  if (aside) aside.id = 'aside';
  if (footer) footer.id = 'footer';
});
