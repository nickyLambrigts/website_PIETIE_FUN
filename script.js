let huidigeIndex = 0;

// Automatisch rollen om de 3 seconden
let autoSlider = setInterval(function() {
  veranderFoto(1, false);
}, 3000);

function veranderFoto(richting, isHandmatig = true) {
  // Stop het automatische rollen als de gebruiker zelf klikt
  if (isHandmatig && autoSlider !== null) {
    clearInterval(autoSlider);
    autoSlider = null;
  }

  const track = document.getElementById("slider-track");
  if (!track) return;

  const aantalFotos = track.children.length;

  huidigeIndex = huidigeIndex + richting;

  if (huidigeIndex >= aantalFotos) {
    huidigeIndex = 0;
  }
  if (huidigeIndex < 0) {
    huidigeIndex = aantalFotos - 1;
  }

  // Verschuif de strook naadloos met stappen van 500px
  track.style.transform = `translateX(-${huidigeIndex * 500}px)`;
}