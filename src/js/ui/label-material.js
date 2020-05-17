import createElement from '../components/createElement'

export default function labelMaterial() {
	const inputs = document.querySelectorAll('.form-control')
	const selects = document.querySelectorAll('select')

	materialInput(inputs)
	materialSelect(selects)
}

function materialSelect(list) {
	Array.from(list).map(item => {
		const labelValue = item.options[0].value
		const labelInput = createElement('label', labelValue)
		const parentNode = item.parentNode

		if (item.classList.contains('select-dark'))
			labelInput.style.color = '#8ad6fd'

		item.options[0] = null
		parentNode.classList.add('input-container', 'is-active')
		parentNode.insertBefore(labelInput, item)
	})
}

function materialInput(list) {
	Array.from(list).map(item => {
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
