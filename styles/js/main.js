document.addEventListener('DOMContentLoaded', function () {
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

document.addEventListener('click', function(e){
  const toggle = document.getElementById('nav-toggle');
  if(!toggle) return;
  const nav = document.querySelector('.site-nav');
  const isHamburger = e.target.classList && e.target.classList.contains('hamburger');
  if(toggle.checked && nav && !nav.contains(e.target) && !isHamburger){
    toggle.checked = false;
  }
});

document.addEventListener('click', function(e){
  const toggle = document.getElementById('nav-toggle');
  if(!toggle) return;
  const nav = document.querySelector('.site-nav');
  if(toggle.checked && nav && !nav.contains(e.target) && !e.target.classList.contains('hamburger')){
    toggle.checked = false;
  }
});
