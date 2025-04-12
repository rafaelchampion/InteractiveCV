document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    const skillCategories = document.querySelectorAll('#skills .skills');

    if (sections.length) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    if (entry.target.id === 'skills') {
                        const detailsElements = entry.target.querySelectorAll('details');
                        detailsElements.forEach(details => {
                            if (!details.open) {
                                details.open = true;
                            }
                        });
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: "0px 0px 150px 0px"
        });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    if (skillCategories.length) {
        const categoryObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillsInCategory = entry.target.querySelectorAll('.skill');
                    let categoryDelay = 0;

                    skillsInCategory.forEach(skill => {
                        const style = window.getComputedStyle(skill);
                        if (style.opacity === '0') {
                            setTimeout(() => {
                                skill.classList.add('visible');
                            }, categoryDelay);
                            categoryDelay += 50;
                        } else {
                            skill.classList.add('visible');
                        }
                    });

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        skillCategories.forEach(category => {
            categoryObserver.observe(category);
        });
    }
});