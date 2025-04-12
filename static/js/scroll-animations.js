document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    const skillCategories = document.querySelectorAll('#skills .skills'); // Get all skill category containers

    // --- Observer for General Sections (Appear Sooner) ---
    if (sections.length) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Special handling for skills section: Open details only
                    if (entry.target.id === 'skills') {
                        const detailsElements = entry.target.querySelectorAll('details');
                        detailsElements.forEach(details => {
                            if (!details.open) {
                                details.open = true;
                            }
                        });
                        // Skill item animation is handled by categoryObserver below
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: "0px 0px 150px 0px" // Trigger 150px before section enters viewport bottom
        });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // --- Observer for Skill Categories (Animate skills within category) ---
    if (skillCategories.length) {
        const categoryObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillsInCategory = entry.target.querySelectorAll('.skill');
                    let categoryDelay = 0; // Reset delay for each category

                    skillsInCategory.forEach(skill => {
                        // Check if skill is already visible (e.g., from page load)
                        const style = window.getComputedStyle(skill);
                        if (style.opacity === '0') { // Only animate if currently hidden
                            setTimeout(() => {
                                skill.classList.add('visible');
                            }, categoryDelay);
                            categoryDelay += 50; // Stagger animation by 50ms within the category
                        } else {
                            // If already visible (likely from page load in viewport), make sure class is set
                            skill.classList.add('visible');
                        }
                    });

                    observer.unobserve(entry.target); // Stop observing this category container
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of the category container is visible
            rootMargin: "0px 0px -50px 0px" // Trigger slightly before container is fully visible
        });

        skillCategories.forEach(category => {
            categoryObserver.observe(category);
        });
    }
});