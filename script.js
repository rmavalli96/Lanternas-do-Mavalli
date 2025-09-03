
// Menu Mobile
const mobileMenu = document.getElementById('mobileMenu');
const menu = document.getElementById('menu');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.review-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const currentActiveCard = document.querySelector('.review-card.active');
            const parentCard = this.parentElement;

            // Se existe um card ativo e não é o que acabamos de clicar, remove a classe 'active' dele
            if (currentActiveCard && currentActiveCard !== parentCard) {
                currentActiveCard.classList.remove('active');
            }

            // Adiciona ou remove a classe 'active' do card que foi clicado
            parentCard.classList.toggle('active');
        });
    });
});