const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const navOverlay = document.getElementById('menu-overlay')

btn.addEventListener('click', () => {
	btn.classList.toggle('open')
	nav.classList.toggle('flex')
	nav.classList.toggle('hidden')
	navOverlay.classList.toggle('hidden')
})
