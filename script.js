// Bouton téléchargement PDF
document.getElementById("downloadPDF").addEventListener("click", () => {
    window.open("https://github.com/MathCod/Mon-CV/cv-mathias-berger.pdf", "_blank"); // Remplace par ton vrai lien ou chemin
});

// Mode sombre
const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleThemeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Mode clair" : "🌙 Mode sombre";
});

// Animation apparition au scroll
const elements = document.querySelectorAll(".fade-in");

function checkVisibility() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);
