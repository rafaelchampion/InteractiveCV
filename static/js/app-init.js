// Initialize theme and language settings
function initApp() {
    if (typeof initializeTheme === 'function') {
        initializeTheme();
    }
    if (typeof initializeLanguage === 'function') {
        initializeLanguage();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
