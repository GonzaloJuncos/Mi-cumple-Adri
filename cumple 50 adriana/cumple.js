document.addEventListener('DOMContentLoaded', function() {
  // Referencias a elementos del DOM
  const playBtn = document.getElementById("playBtn");
  const initialScreen = document.getElementById("initialScreen");
  const mainContent = document.getElementById("mainContent");
  const confirmBtn = document.getElementById("confirmBtn");
  
  // Iniciar la animación al hacer clic en el botón de play
  playBtn.addEventListener("click", function() {
    startExperience();
  });

  // Función para iniciar la experiencia
  function startExperience() {
    console.log("Iniciando experiencia...");
    
    // Cambiar fondo a negro con estrellas
    document.body.style.background = "#000";
    
    // Ocultar pantalla inicial
    initialScreen.style.opacity = "0";
    initialScreen.style.pointerEvents = "none";
    
    // Mostrar contenido principal
    mainContent.classList.add("visible");
    
    // Crear confeti después de un tiempo
    setTimeout(createConfetti, 1500);
    
    // Ocultar completamente la pantalla inicial después de la transición
    setTimeout(function() {
      initialScreen.style.display = "none";
    }, 1000);
  }

  // Función para crear confeti
  function createConfetti() {
    console.log("Creando confeti...");
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00de', '#00ffff'];
    const confettiCount = window.innerWidth < 768 ? 30 : 60;
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.width = Math.random() * 10 + 5 + "px";
      confetti.style.height = Math.random() * 10 + 5 + "px";
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
      confetti.style.animationDelay = (Math.random() * 2) + "s";
      document.body.appendChild(confetti);
      
      // Eliminar confeti después de la animación
      setTimeout(() => {
        confetti.remove();
      }, 7000);
    }
  }

  // Botón de confirmación
  if (confirmBtn) {
    confirmBtn.addEventListener("click", function() {
      alert("¡Gracias por confirmar tu asistencia!");
      createConfetti();
    });
  }

  // Actualizar cuenta regresiva
  function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) return;
    
    const eventDate = new Date("2025-07-19T00:00:00").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;
  
    if (diff <= 0) {
      countdownElement.innerHTML = `
        <div>0</div>
        <div>00</div>
        <div>00</div>
        <div>00</div>
      `;
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    // Crear elementos para cada unidad de tiempo
    countdownElement.innerHTML = `
      <div>${days}</div>
      <div>${hours.toString().padStart(2, '0')}</div>
      <div>${minutes.toString().padStart(2, '0')}</div>
      <div>${seconds.toString().padStart(2, '0')}</div>
    `;
  }
  
  // Actualizar la cuenta regresiva cada segundo
  setInterval(updateCountdown, 1000);
  updateCountdown();
});