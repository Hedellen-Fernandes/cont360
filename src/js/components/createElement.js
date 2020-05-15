export default function createElement(element, text) {
	const newElement = document.createElement(element)
	const newElementText = document.createTextNode(text)

	newElement.appendChild(newElementText)

	return newElement
}
