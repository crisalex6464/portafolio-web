const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Cargar preferencia previa
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
}

// Evento para alternar
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Solo animar una vez
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));


document.addEventListener("DOMContentLoaded", () => {
  const botonIdea = document.getElementById("generarIdea");
  const ideaTexto = document.getElementById("ideaGenerada");

  if (botonIdea && ideaTexto) {
    botonIdea.addEventListener("click", () => {
      const ideas = [
        "📦 Una app de trazabilidad agrícola con blockchain y QR.",
        "🎮 Un minijuego educativo para aprender Web3.",
        "🛠️ Un generador de portafolios estáticos con Next.js.",
        "🔗 Una red social descentralizada con Solidity.",
        "📊 Un dashboard que analiza sentimientos con IA (en desarrollo)."
      ];
      const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
      ideaTexto.textContent = randomIdea;
    });
  }
});


