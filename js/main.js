// Close mobile hamburger menu when a nav link is clicked
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelectorAll('.site-nav .nav-list a');
  if (!navToggle) return;
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navToggle.checked) navToggle.checked = false;
    });
  });
});
