document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`Detail: ${card.querySelector('h3').textContent}`);
    });
});
function toggleMenu() {
    document.querySelector(".menu-container").classList.toggle("active");
}
window.onclick = function(e) {
    if (!e.target.closest('.menu-container')) {
        document.querySelector(".menu-container").classList.remove("active");
    }
}
    