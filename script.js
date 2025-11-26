// Minimal interactions: mobile menu toggle and simple form preventDefault
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // Prevent form default for demo (so submission doesn't reload)
  document.querySelectorAll('form').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      // simple success feedback
      const btn = f.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = 'Subscribed ✓';
        setTimeout(()=> btn.innerHTML = original, 2000);
      }
    });
  });
});