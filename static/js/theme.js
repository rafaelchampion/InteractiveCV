function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        toggleTheme();
    });
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (userPrefersDark ? 'dark' : 'light');
    setTheme(savedTheme);
}

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.remove('dark-mode');
    }
    else {
        document.body.classList.add('dark-mode');
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    var isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}