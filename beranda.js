function toggleMenu() {
    document.querySelector(".menu-container").classList.toggle("active");
}
window.onclick = function(e) {
    if (!e.target.closest('.menu-container')) {
        document.querySelector(".menu-container").classList.remove("active");
    }
}
    