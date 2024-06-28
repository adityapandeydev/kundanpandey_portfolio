document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu");

    menuBtn.addEventListener("click", function() {
        menuBtn.classList.toggle("open");
    });
});
