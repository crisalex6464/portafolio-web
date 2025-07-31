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
        "🧾 Una app de facturación para pequeños negocios con generación de PDFs y reportes visuales.",
  "🌱 Una app de monitoreo de cultivos con IoT y visualización de datos en tiempo real.",
  "🎓 Una plataforma de microcursos con creación colaborativa de lecciones.",
  "💬 Un asistente virtual básico con IA y respuestas contextuales usando OpenAI.",
  "🛒 Una tienda web con carrito persistente, filtros y simulación de pagos.",
  "🧠 Un quiz inteligente para practicar entrevistas técnicas con retroalimentación adaptativa.",
  "🔐 Un gestor de contraseñas local en Java con cifrado AES.",
  "📂 Un buscador de archivos y notas etiquetadas con almacenamiento local.",
  "🎙️ Un blog con reconocimiento de voz para redactar artículos por dictado.",
  "📌 Una agenda personal con tareas, recordatorios y sincronización con Google Calendar.",
  "💸 Un simulador de criptomonedas con datos en tiempo real desde CoinGecko API.",
  "⚖️ Una app educativa sobre blockchain y leyes, con casos interactivos.",
  "🧭 Un mapa interactivo de espacios tech, coworkings y eventos en tu ciudad.",
  "🔄 Un conversor de unidades inteligente con historial y favoritos.",
  "🖼️ Una galería NFT simulada con contratos inteligentes básicos en Solidity.",
  "🤖 Un bot de Telegram con IA para resolver dudas frecuentes de estudiantes.",
  "🌐 Un traductor web con almacenamiento offline y sugerencias con IA.",
  "📘 Un CV interactivo que cambia de diseño según el tipo de reclutador (modo presentación).",
  "🪪 Un verificador de diplomas con código QR y registro en blockchain.",
  "💡 Una app para capturar ideas rápidas por voz/texto y sugerencias con IA.",
        "📊 Un dashboard que analiza sentimientos con IA (en desarrollo)."
        
      ];
      const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
      ideaTexto.textContent = randomIdea;
    });
  }
});


