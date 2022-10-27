console.log("Probando");
addEventListener("DOMContentLoaded", () => {
    const botonmenu = document.querySelector('.botonmenu')
    if (botonmenu) {
        botonmenu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
});