// Check browser memory for language, default to 'en'
let currentLang = localStorage.getItem('studioLang') || 'en';

function applyLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        el.innerHTML = el.getAttribute('data-' + currentLang);
    });

    const toggleBtn = document.getElementById('lang-toggle');
    if(toggleBtn) {
        toggleBtn.innerText = (currentLang === 'en') ? '中文' : 'English';
    }
}

function toggleLanguage() {
    currentLang = (currentLang === 'en') ? 'zh' : 'en';
    localStorage.setItem('studioLang', currentLang); // Save choice to browser memory
    applyLanguage();
}

function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    const navToggle = document.getElementById('nav-toggle');
    if (!navLinks || !navToggle) return;

    navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
}

function closeNav() {
    const navLinks = document.getElementById('nav-links');
    const navToggle = document.getElementById('nav-toggle');
    if (!navLinks || !navToggle) return;

    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
}

// Run applyLanguage as soon as the page loads
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage();

    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeNav);
    });
});
