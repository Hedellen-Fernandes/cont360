export default function Nav() {
	const navContainer = document.getElementById('nav')

	navContainer.addEventListener('click', event => {
		let target = event.target

		if (target.classList.contains('active'))
			target.classList.remove('active')
		else
			target.classList.add('active')

		// event.preventDefault()
	})
}
