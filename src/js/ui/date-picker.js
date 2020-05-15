export default function Datepicker() {
	const inputData = document.querySelectorAll('.date-picker')

	Array.from(inputData).map(item => {
		item.addEventListener('focus', event => {
			const target = event.target
			target.setAttribute('value', new Date().toISOString().substr(0, 10))
		})

		item.addEventListener('blur', () => {
			if (!item.value)
				item.type = 'text'
		})
	})
}
