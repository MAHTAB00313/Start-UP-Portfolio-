let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x-lg");
let nav = document.querySelector(".navbar_menu");


openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    nav.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    nav.classList.toggle("hidden");
});