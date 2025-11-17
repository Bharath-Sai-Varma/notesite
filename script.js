// Small JS to toggle a light/dark theme. Good for practicing small changes and conflicts.
const btn = document.getElementById('theme-toggle');
btn && btn.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
});
