const menu = document.querySelector(".menubar")
const mobile = document.querySelector(".mobile-menu")
const modalContainer = document.querySelector(".menu-container")
const closeIcon = document.querySelector(".close-icon")

function changeMenubar() {
    var windowWidth = window.innerWidth;

    if(windowWidth < 1200) {
        menu.classList.add("hide-menubar")
        mobile.classList.add("show-mobile-menu")
    } else {
        menu.classList.remove("hide-menubar")
        mobile.classList.remove("show-mobile-menu")
    }
}

window.onload = changeMenubar;
window.addEventListener('resize' , changeMenubar)

mobile.addEventListener("click",() => {
    modalContainer.classList.add("show-sidemenu")
})

closeIcon.addEventListener("click",() => {
    modalContainer.classList.remove("show-sidemenu")
})