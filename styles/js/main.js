// Combined main.js: mobile nav helpers
document.addEventListener('DOMContentLoaded', function () {
  // Close mobile hamburger menu when a nav link is clicked
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelectorAll('.site-nav .nav-list a');
  if (navToggle) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navToggle.checked) navToggle.checked = false;
      });
    });
  }
});

// Close mobile nav when clicking outside (optional enhancement)
document.addEventListener('click', function(e){
  const toggle = document.getElementById('nav-toggle');
  if(!toggle) return;
  const nav = document.querySelector('.site-nav');
  const isHamburger = e.target.classList && e.target.classList.contains('hamburger');
  if(toggle.checked && nav && !nav.contains(e.target) && !isHamburger){
    toggle.checked = false;
  }
});
// Small JS helpers
document.addEventListener('click', function(e){
  // close mobile nav if click outside (optional enhancement)
  const toggle = document.getElementById('nav-toggle');
  if(!toggle) return;
  const nav = document.querySelector('.site-nav');
  if(toggle.checked && nav && !nav.contains(e.target) && !e.target.classList.contains('hamburger')){
    toggle.checked = false;
  }
});
