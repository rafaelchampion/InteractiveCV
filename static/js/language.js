function initializeLanguage() {
    const ptLangToggle = document.getElementById('lang-toggle-pt');
    const enLangToggle = document.getElementById('lang-toggle-en');
    ptLangToggle.addEventListener('click', () => {
        updateLanguageContent('pt');
    });
    enLangToggle.addEventListener('click', () => {
        updateLanguageContent('en');
    });

    const userLang = navigator.language || navigator.userLanguage;
    const supportedLangs = ['en', 'pt'];
    const defaultLang = supportedLangs.includes(userLang.substring(0, 2)) ? userLang.substring(0, 2) : 'pt';
    const savedLang = localStorage.getItem('language') || defaultLang;
    updateLanguageContent(savedLang);
}

function updateLanguageContent(lang) {
    document.querySelectorAll('[data-translate-key]').forEach(element => {


        element.classList.add('lang-transition');
        setTimeout(() => {
            element.classList.remove('lang-transition');
        }, 500);
        const key = element.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.documentElement.lang = lang === 'en' ? 'en-US' : 'pt-BR';
    document.title = lang === 'en'
        ? "Rafael Comunhão Ferreira - Academic and professional resumé"
        : "Rafael Comunhão Ferreira - Resumo acadêmico e profissional";

    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('language', lang);
}