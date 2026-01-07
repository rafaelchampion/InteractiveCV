document.addEventListener("DOMContentLoaded", () => {
    const aside = document.querySelector("aside.sidebar");

    if (!aside) return; // Exit if sidebar not found

    const reflection = aside.querySelector('.reflection');
    const holoPattern = aside.querySelector('.holo-pattern'); // Ensure pattern is inside aside
    // const holoLines = aside.querySelector('.holo-lines'); // Uncomment if using
    // const cardShine = aside.querySelector('.card-shine'); // Uncomment if using

    if (!reflection || !holoPattern) return; // Exit if essential elements are missing

    let lastMouseX = 50;
    let lastMouseY = 50;
    let mobileEffectInterval;

    // Optimization: Throttle visual updates using requestAnimationFrame
    let ticking = false;
    let mouseX = 0;
    let mouseY = 0;

    function updateHolographicEffects(rotateX, rotateY) {
        const normRotateX = (rotateX + 15) / 30;
        const normRotateY = (rotateY + 15) / 30;
        holoPattern.style.opacity = 0.5;
        const hue = ((normRotateX + normRotateY) * 180) % 360;
        holoPattern.style.filter = `hue-rotate(${hue}deg)`;
    }

    function resetCard() {
        holoPattern.style.opacity = 0;
        reflection.style.opacity = 0;
    }

    function startMobileEffect() {
        let angle = 0;
        const radius = 20;
        const centerX = 50;
        const centerY = 50;

        mobileEffectInterval = setInterval(() => {
            const x = centerX + radius * Math.cos(angle * (Math.PI / 180));
            const y = centerY + radius * Math.sin(angle * (Math.PI / 180));

            const rotateX = ((y - 50) / 2) * -1;
            const rotateY = (x - 50) / 2;

            aside.style.setProperty("--rotateX", `${rotateX}deg`);
            aside.style.setProperty("--rotateY", `${rotateY}deg`);
            aside.style.setProperty("--light-x", `${x}%`);
            aside.style.setProperty("--light-y", `${y}%`);

            updateHolographicEffects(rotateX, rotateY);

            angle = (angle + 2) % 360;
        }, 50);
    }

    function stopMobileEffect() {
        clearInterval(mobileEffectInterval);
        resetCard();
    }

    function isMobile() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    function updateVisuals() {
        // We calculate dimensions here to ensure correctness even if layout changes (e.g. scroll on non-fixed sidebar)
        // Since this runs in rAF, it's throttled to frame rate, which is efficient enough.
        const { width, height, left, top } = aside.getBoundingClientRect();

        // Avoid division by zero
        if (width === 0 || height === 0) return;

        const x = (mouseX - left) / width * 100;
        const y = (mouseY - top) / height * 100;

        const rotateX = ((mouseY - top - height / 2) / 35) * -1;
        const rotateY = (mouseX - left - width / 2) / 35;

        aside.style.setProperty("--rotateX", `${rotateX}deg`);
        aside.style.setProperty("--rotateY", `${rotateY}deg`);

        const lightX = x * 0.8 + (50 + rotateY * 2) * 0.2;
        const lightY = y * 0.8 + (50 + rotateX * 2) * 0.2;
        const clampedLightX = Math.max(0, Math.min(100, lightX));
        const clampedLightY = Math.max(0, Math.min(100, lightY));

        aside.style.setProperty("--light-x", `${clampedLightX}%`);
        aside.style.setProperty("--light-y", `${clampedLightY}%`);

        lastMouseX = clampedLightX;
        lastMouseY = clampedLightY;

        updateHolographicEffects(rotateX, rotateY);
    }

    if (isMobile()) {
        aside.style.setProperty("transition", "transform 0.2s ease-out");
        reflection.style.opacity = 1;
        startMobileEffect();
        window.addEventListener("beforeunload", stopMobileEffect);
    } else {
        aside.addEventListener("mouseenter", (e) => {
            aside.style.setProperty("transition", "transform 0.2s ease-out");
            reflection.style.opacity = 1;
        });

        // Optimized mousemove handler
        aside.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateVisuals();
                    ticking = false;
                });
                ticking = true;
            }
        });

        aside.addEventListener("mouseleave", () => {
            aside.style.setProperty("transition", "transform 0.6s ease-out, --light-x 0.6s ease-out, --light-y 0.6s ease-out");
            aside.style.setProperty("--rotateX", "0deg");
            aside.style.setProperty("--rotateY", "0deg");
            resetCard();
        });
    }
});
