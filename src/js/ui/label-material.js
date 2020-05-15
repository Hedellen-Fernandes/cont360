import createElement from '../components/createElement'

export default function labelMaterial() {
	const input = document.querySelectorAll('.form-control')

	Array.from(input).map(item => {
		if (item.type != 'search') {
			const placeholderValue = item.placeholder
			const labelInput = createElement('label', placeholderValue)
			const parentNode = item.parentNode

			item.placeholder = ''
			parentNode.classList.add('input-container')
			parentNode.insertBefore(labelInput, item)

			changeActive(parentNode, item)
		}
	})
}

function changeActive(parentNode, input) {
	parentNode.addEventListener('click', () => {
		input.focus()
	})

	input.addEventListener('blur', () => {
		if (!input.value.length)
			parentNode.classList.remove('is-active')
	})

	input.addEventListener('focus', () => {
		parentNode.classList.add('is-active')
	})
}
