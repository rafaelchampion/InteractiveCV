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

    function updateHolographicEffects(rotateX, rotateY) {
        const normRotateX = (rotateX + 15) / 30;
        const normRotateY = (rotateY + 15) / 30;
        // const magnitude = Math.sqrt(normRotateX * normRotateX + normRotateY * normRotateY);
        holoPattern.style.opacity = 0.5;
        const hue = ((normRotateX + normRotateY) * 180) % 360;
        holoPattern.style.filter = `hue-rotate(${hue}deg)`;
        // const angle = Math.atan2(normRotateY, normRotateX) * (180 / Math.PI); // If needed for other effects

        // Add holoLines/cardShine logic here if they exist and are being used
        // if (holoLines) holoLines.style.opacity = magnitude * 0.6; // Example
        // if (cardShine) cardShine.style.opacity = magnitude * 0.5; // Example
    }

    function resetCard() {
        holoPattern.style.opacity = 0;
        reflection.style.opacity = 0;
        // if (holoLines) holoLines.style.opacity = 0;
        // if (cardShine) cardShine.style.opacity = 0;
        // Reset any other effects
    }

    aside.addEventListener("mouseenter", (e) => {
        aside.style.setProperty("transition", "transform 0.2s ease-out"); // Faster transition on enter/move
        reflection.style.opacity = 1;
    });

    aside.addEventListener("mousemove", (e) => {
        const { width, height, left, top } = aside.getBoundingClientRect();
        const x = (e.clientX - left) / width * 100;
        const y = (e.clientY - top) / height * 100;

        // Reduced rotation range for subtlety
        const rotateX = ((e.clientY - top - height / 2) / 35) * -1; // Was 25
        const rotateY = (e.clientX - left - width / 2) / 35; // Was 25

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
        // Slower transition on leave for a smoother reset
        aside.style.setProperty("transition", "transform 0.6s ease-out, --light-x 0.6s ease-out, --light-y 0.6s ease-out");

        aside.style.setProperty("--rotateX", "0deg");
        aside.style.setProperty("--rotateY", "0deg");
        // Keep light position based on last mouse position for a more natural fade out
        // aside.style.setProperty("--light-x", `50%`);
        // aside.style.setProperty("--light-y", `50%`);

        resetCard();
    });
}); 