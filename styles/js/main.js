// Combined main.js: mobile nav helpers and cart functionality
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

  // Cart functionality
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = document.getElementById('cart-count');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
  }

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.getAttribute('data-product');
      const price = parseInt(button.getAttribute('data-price'));
      const existingItem = cart.find(item => item.product === product);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ product, price, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert(`${product} añadido al carrito!`);
    });
  });

  updateCartCount(); // Initialize count on load
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
