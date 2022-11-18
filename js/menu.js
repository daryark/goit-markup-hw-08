const refs = {
	openMenuBtn: document.querySelector("[data-open-menu]"),
	closeMenuBtn: document.querySelector("[data-close-menu]"),
	menu: document.querySelector("[data-menu]"),
};

refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.closeMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	refs.menu.classList.toggle("is-hidden");
}
