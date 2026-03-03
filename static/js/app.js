document.addEventListener('DOMContentLoaded', () => {
    // Initialize Theme and Language
    if (typeof initializeTheme === 'function') {
        initializeTheme();
    }
    if (typeof initializeLanguage === 'function') {
        initializeLanguage();
    }

    // Handle deferred CSS loading to avoid inline onload handlers
    const deferredStyles = document.querySelectorAll('link.deferred-style');
    deferredStyles.forEach(link => {
        link.media = 'all';
    });
});
