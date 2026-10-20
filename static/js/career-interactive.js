document.addEventListener("DOMContentLoaded", () => {
    // Career expand/collapse deep dive details
    const toggleButtons = document.querySelectorAll(".timeline-deepdive-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const timelineItem = button.closest(".timeline-item");
            const detailsBlock = timelineItem.querySelector(".timeline-deepdive");
            const currentLang = document.documentElement.getAttribute("lang") || "pt";

            if (detailsBlock) {
                const isExpanded = detailsBlock.classList.contains("expanded");
                if (isExpanded) {
                    detailsBlock.classList.remove("expanded");
                    button.classList.remove("active");
                    button.setAttribute("aria-expanded", "false");
                    const labelSpan = button.querySelector(".btn-text");
                    if (labelSpan) {
                        labelSpan.textContent = currentLang === "en" ? "View details" : "Ver detalhes técnicos";
                    }
                } else {
                    detailsBlock.classList.add("expanded");
                    button.classList.add("active");
                    button.setAttribute("aria-expanded", "true");
                    const labelSpan = button.querySelector(".btn-text");
                    if (labelSpan) {
                        labelSpan.textContent = currentLang === "en" ? "Hide details" : "Ocultar detalhes";
                    }
                }
            }
        });
    });

    // Copy NuGet install command feature for Utilbox project
    const copyNuGetBtn = document.getElementById("copy-nuget-btn");
    if (copyNuGetBtn) {
        copyNuGetBtn.addEventListener("click", () => {
            const command = "dotnet add package Utilbox";
            navigator.clipboard.writeText(command).then(() => {
                const originalHTML = copyNuGetBtn.innerHTML;
                copyNuGetBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Copied!</span>';
                copyNuGetBtn.classList.add("copied");
                setTimeout(() => {
                    copyNuGetBtn.innerHTML = originalHTML;
                    copyNuGetBtn.classList.remove("copied");
                }, 2000);
            });
        });
    }
});
