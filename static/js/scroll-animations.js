document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');

    if (!sections.length) return; // Exit if no sections found

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Special handling for skills section animations
                if (entry.target.id === 'skills') {
                    const detailsElements = entry.target.querySelectorAll('details');
                    const skillItems = entry.target.querySelectorAll('.skill');
                    let delay = 0;

                    // Open details smoothly if possible (or just set open)
                    detailsElements.forEach(details => {
                        // Check if already open to prevent re-triggering animations if any
                        if (!details.open) {
                            details.open = true;
                            // Potentially add a class here if CSS transitions are set up for details opening
                        }
                    });

                    // Animate skill items with stagger
                    skillItems.forEach(item => {
                        // Check if already visible to prevent re-triggering
                        if (!item.classList.contains('visible')) {
                            setTimeout(() => {
                                item.classList.add('visible');
                            }, delay);
                            delay += 50; // Stagger animation by 50ms
                        }
                    });
                }

                observer.unobserve(entry.target); // Stop observing the section once animated
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }); // Trigger slightly before fully visible

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}); 