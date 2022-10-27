console.log ("probando");
addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger")
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            const menu_items =document.querySelector(".menu_items")
            menu_items.classList.toggle("show")
        })
    }
})