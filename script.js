// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (light <-> dark)
const root = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');

if (saved) root.setAttribute('data-theme', saved);
toggleBtn.textContent = root.getAttribute('data-theme') === 'dark' ? '🌙' : '☀️';

toggleBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggleBtn.textContent = next === 'dark' ? '🌙' : '☀️';
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));