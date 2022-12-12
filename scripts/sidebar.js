toggle.addEventListener('click', () => {
	sidebar.classList.toggle('open');
});

navItems.forEach((navItem, index) => {

	navItem.addEventListener('click', () => {

		navItem.classList.toggle('active')
		pages[index].classList.toggle('hide-page')
	})
});