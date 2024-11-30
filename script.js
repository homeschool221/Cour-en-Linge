// Exemple d'interaction JavaScript (optionnelle)
// Ajoute un comportement pour scroller vers la section "À propos"
document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
});
