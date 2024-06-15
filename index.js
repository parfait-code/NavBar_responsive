const toggleMenuBtn = document.querySelector("#menu-btn ");
const toggleMenuImg = document.querySelector("#menu-btn img");
const toggledMenu = document.querySelector("#toggled-menu");
const menuLinks  = document.querySelector("#main-nav ul a");

toggleMenuBtn.addEventListener("click", toggledNav);


function toggledNav() {
    toggledMenu.classList.toggle("-translate-y-full");
    if (toggledMenu.classList.contains("-translate-y-full")) {
        toggleMenuImg.setAttribute("src", "images/menu.png");
        toggleMenuBtn.setAttribute ("aria-expanded", "false")
    } else {
        toggleMenuImg.setAttribute("src", "images/cross.png");
        toggleMenuBtn.setAttribute ("aria-expanded", "true")
    }
} 