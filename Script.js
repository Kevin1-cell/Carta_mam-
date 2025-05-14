// FUNCIONALIDAD DE ABRIR LA CARTA CON ANIMACIÓN
function mostrarCarta() {
  const carta = document.getElementById("carta");
  const botonCerrar = document.querySelector(".boton-cerrar");

  // Elimina clase de cierre si existía
  carta.classList.remove("cerrar");
  botonCerrar.classList.remove("cerrar");

  // Muestra la carta
  carta.style.display = "block";
}

// FUNCIONALIDAD DE CERRAR LA CARTA CON ANIMACIÓN
function cerrarCarta() {
  const carta = document.getElementById("carta");
  const botonCerrar = document.querySelector(".boton-cerrar");

  // Añadir la clase de cierre
  carta.classList.add("cerrar");
  botonCerrar.classList.add("cerrar");

  // Ocultar la carta después de la animación
  setTimeout(() => {
    carta.style.display = "none";
  }, 1000); // 1s = duración de la animación CSS
}

// EFECTO DE FLORES Y MENSAJE FINAL AL HACER SCROLL
window.addEventListener("scroll", function () {
  const flores = document.getElementById("flores");
  const mensaje = document.getElementById("mensajeFinal");
  const altura = window.scrollY + window.innerHeight;

  if (flores.offsetTop < altura) {
    flores.style.opacity = 1;
    mensaje.style.opacity = 1;
  }
});

// LANZAR CONFETI AL ABRIR LA CARTA
function lanzarConfeti() {
  for (let i = 0; i < 150; i++) {
    const confeti = document.createElement("div");
    confeti.classList.add("confeti");

    const colores = ["#f48fb1", "#ffb74d", "#81d4fa", "#aed581", "#ce93d8"];
    confeti.style.backgroundColor =
      colores[Math.floor(Math.random() * colores.length)];
    confeti.style.left = Math.random() * 100 + "vw";
    confeti.style.top = "-10px";
    confeti.style.width = "10px";
    confeti.style.height = "10px";
    confeti.style.animationDuration = Math.random() * 2 + 3 + "s";
    confeti.style.animationDelay = Math.random() * 2 + "s";
    confeti.style.opacity = Math.random();
    confeti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confeti);

    setTimeout(() => confeti.remove(), 6000);
  }
}

// EVENTO PARA ABRIR LA CARTA Y LANZAR CONFETI
document.querySelector(".boton-abrir").addEventListener("click", () => {
  lanzarConfeti();
  mostrarCarta();
});

function empezarAnimacionRosa() {
  const rosa = document.querySelector(".rosa");
  rosa.classList.add("brotar");
}

//FUNCION DEL CARRUCEL

const carousel = document.querySelector(".carousel");
const images = Array.from(carousel.children);
images.forEach((img) => {
  const clone = img.cloneNode(true);
  carousel.appendChild(clone);
});

//audio
window.addEventListener("click", () => {
  const music = document.getElementById("background-music");
  if (music && music.paused) {
    music.play();
  }
});
