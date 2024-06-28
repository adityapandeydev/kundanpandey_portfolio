function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuBar = document.querySelector(".menu-bar");

    if (menu.style.right === "-200px") {
        menu.style.right = "0";
        menuBar.classList.add("change");
    } else {
        menu.style.right = "-200px";
        menuBar.classList.remove("change");
    }
}