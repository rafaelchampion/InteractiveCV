document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("skills-search");
    const filterTabs = document.querySelectorAll(".skills-tab-btn");
    const skillCategories = document.querySelectorAll(".skill-category-block");
    const allSkills = document.querySelectorAll(".skills-grid .skill");
    const skillsCountEl = document.getElementById("skills-match-count");

    let currentCategory = "all";
    let currentSearchTerm = "";

    function filterSkills() {
        let visibleCount = 0;

        skillCategories.forEach(category => {
            const categoryType = category.getAttribute("data-category");
            const categorySkills = category.querySelectorAll(".skill");
            let categoryMatches = 0;

            const categoryMatchesTab = currentCategory === "all" || categoryType === currentCategory;

            categorySkills.forEach(skill => {
                const skillText = skill.textContent.toLowerCase();
                const matchesSearch = !currentSearchTerm || skillText.includes(currentSearchTerm);

                if (categoryMatchesTab && matchesSearch) {
                    skill.style.display = "inline-flex";
                    categoryMatches++;
                    visibleCount++;
                } else {
                    skill.style.display = "none";
                }
            });

            if (categoryMatchesTab && (categoryMatches > 0 || !currentSearchTerm)) {
                category.style.display = "block";
            } else {
                category.style.display = "none";
            }
        });

        if (skillsCountEl) {
            const currentLang = document.documentElement.getAttribute("lang") || "pt";
            if (currentSearchTerm) {
                skillsCountEl.textContent = currentLang === "en"
                    ? `${visibleCount} skill${visibleCount !== 1 ? 's' : ''} found`
                    : `${visibleCount} habilidade${visibleCount !== 1 ? 's' : ''} encontrada${visibleCount !== 1 ? 's' : ''}`;
                skillsCountEl.style.display = "block";
            } else {
                skillsCountEl.style.display = "none";
            }
        }
    }

    if (filterTabs.length) {
        filterTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                filterTabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                currentCategory = tab.getAttribute("data-filter");
                filterSkills();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchTerm = e.target.value.trim().toLowerCase();
            filterSkills();
        });

        const clearBtn = document.getElementById("skills-search-clear");
        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                searchInput.value = "";
                currentSearchTerm = "";
                filterSkills();
                searchInput.focus();
            });
        }
    }
});
