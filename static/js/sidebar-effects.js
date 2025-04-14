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

        aside.addEventListener("mousemove", (e) => {
            const { width, height, left, top } = aside.getBoundingClientRect();
            const x = (e.clientX - left) / width * 100;
            const y = (e.clientY - top) / height * 100;

            const rotateX = ((e.clientY - top - height / 2) / 35) * -1;
            const rotateY = (e.clientX - left - width / 2) / 35;

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
        });

        aside.addEventListener("mouseleave", () => {
            aside.style.setProperty("transition", "transform 0.6s ease-out, --light-x 0.6s ease-out, --light-y 0.6s ease-out");
            aside.style.setProperty("--rotateX", "0deg");
            aside.style.setProperty("--rotateY", "0deg");
            resetCard();
        });
    }
});