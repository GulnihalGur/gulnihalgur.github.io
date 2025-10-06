// Theme toggle with localStorage
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';
if(savedTheme === 'light'){
  root.style.setProperty('--bg', '#f7f7fb');
  root.style.setProperty('--card', '#ffffff');
  root.style.setProperty('--text', '#101018');
  root.style.setProperty('--muted', '#4a4a57');
  root.style.setProperty('--glass', 'rgba(0,0,0,0.04)');
  root.style.setProperty('--border', 'rgba(0,0,0,0.12)');
}
themeToggle?.addEventListener('click', () => {
  const current = getComputedStyle(root).getPropertyValue('--bg').trim();
  const light = current === '#f7f7fb';
  if(light){
    // switch to dark
    root.style.setProperty('--bg', '#0b0b10');
    root.style.setProperty('--card', '#11131a');
    root.style.setProperty('--text', '#e8e8ef');
    root.style.setProperty('--muted', '#a7a7b3');
    root.style.setProperty('--glass', 'rgba(255,255,255,0.06)');
    root.style.setProperty('--border', 'rgba(255,255,255,0.14)');
    localStorage.setItem('theme', 'dark');
  }else{
    // switch to light
    root.style.setProperty('--bg', '#f7f7fb');
    root.style.setProperty('--card', '#ffffff');
    root.style.setProperty('--text', '#101018');
    root.style.setProperty('--muted', '#4a4a57');
    root.style.setProperty('--glass', 'rgba(0,0,0,0.04)');
    root.style.setProperty('--border', 'rgba(0,0,0,0.12)');
    localStorage.setItem('theme', 'light');
  }
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navList.classList.toggle('show');
});

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  })
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Year
document.getElementById('year').textContent = new Date().getFullYear();
