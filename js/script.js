const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.nav-links')
hamburger.addEventListener('click', () => {
	navbar.classList.toggle('hidden')
})
