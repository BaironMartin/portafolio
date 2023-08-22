window.addEventListener("load", () => {
    document.querySelector(".menu-btn").addEventListener("click", () => {
        document.querySelector(".parent-link").classList.toggle("show");
    });
});