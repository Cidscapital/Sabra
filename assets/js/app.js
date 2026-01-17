// Simple app.js for nav drawer toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.drawer');

  if (navToggle && drawer) {
    navToggle.addEventListener('click', function() {
      drawer.classList.toggle('open');
    });

    // Close drawer when clicking on a link
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        drawer.classList.remove('open');
      });
    });
  }
});
