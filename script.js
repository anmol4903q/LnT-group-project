// Fade slider logic
document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Start on Anmol (slide index 0) with no visual flash:
  let current = 0;
  // ensure only current has .active
  slides.forEach((s, i) => s.classList.toggle('active', i === current));

  function goTo(index) {
    // wrap around
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    // remove active from old, add to new
    slides[current].classList.remove('active');
    slides[index].classList.add('active');
    current = index;
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // optional: keyboard arrows
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });
});

// ABOUT POPUP
const aboutBtn = document.querySelector('.topnav a:nth-child(1)');
const aboutOverlay = document.getElementById('aboutOverlay');
const closeAbout = document.getElementById('closeAbout');

aboutBtn.addEventListener('click', () => {
  aboutOverlay.classList.add('active');
});

closeAbout.addEventListener('click', () => {
  aboutOverlay.classList.remove('active');
});

// close when clicking outside the box
aboutOverlay.addEventListener('click', (e) => {
  if (e.target === aboutOverlay) {
    aboutOverlay.classList.remove('active');
  }
});

// CONTACT POPUP
const contactBtn = document.querySelector('.topnav a:nth-child(3)');
const contactOverlay = document.getElementById('contactOverlay');
const closeContact = document.getElementById('closeContact');

contactBtn.addEventListener('click', () => {
  contactOverlay.classList.add('active');
});

closeContact.addEventListener('click', () => {
  contactOverlay.classList.remove('active');
});

contactOverlay.addEventListener('click', (e) => {
  if (e.target === contactOverlay) {
    contactOverlay.classList.remove('active');
  }
});
