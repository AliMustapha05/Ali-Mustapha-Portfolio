const darkBtn = document.getElementById('darkmodeBtn');

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
        darkBtn.textContent = '☀️';
  } else {
        darkBtn.textContent = '🌙';
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({behavior: 'smooth'});
    });
});