function toggleMenu() {
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.classList.toggle('active');
}

function toggleBiodata(id) {
    const biodata = document.getElementById(id);
    biodata.classList.toggle('active');
}