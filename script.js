const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.site-nav a');

const closeNav = () => {
  if (header && navToggle) {
    header.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
};

if (navToggle && header) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) =>
  link.addEventListener('click', () => {
    closeNav();
  })
);

window.addEventListener('resize', () => {
  if (window.innerWidth > 780) {
    closeNav();
  }
});
