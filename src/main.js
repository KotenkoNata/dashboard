(() => {
    const refs = {
        openModalBtn: document.querySelector(".burger-menu__close-btn"),
        menu: document.querySelector(".burger-menu__list-container"),
        menuItems: document.querySelectorAll(".burger-menu__list-container li"),
        body: document.querySelector('body'),
    };

    function toggleModal() {
        refs.openModalBtn.classList.toggle("active");
        refs.menu.classList.toggle("active");
        refs.body.classList.toggle('lock');
    }

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.menuItems.forEach(el => {
        el.addEventListener('click', toggleModal)
    })
})();