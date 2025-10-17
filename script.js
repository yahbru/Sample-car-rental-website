const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
	navLinks.classList.toggle("open");

	const isOpen = navLinks.classList.contains("open");
	menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
	navLinks.classList.remove("open");
	menuBtnIcon.setAttribute("class", ri-menu-line)
});

const tabs = document.querySelector(".deals__tabs");

tabs.addEventListener("click", (e) => {
	const tabContents = document.querySelectorAll(
		".deals__container .tab__content"
	);
	Array.from(tabs.children).forEach((item) => {
		if (item.dataset.id === e.target.dataset.id) {
			item.classList.add("active");
		} else {
			item.classList.remove("active");
		}
	});
	tabContents.forEach((item) => {
		if (item.id === e.target.dataset.id) {
			item.classList.add("active");
		} else {
			item.classList.remove("active")
		}
	})
});