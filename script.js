document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('themeToggle');

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
});