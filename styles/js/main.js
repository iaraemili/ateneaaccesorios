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
