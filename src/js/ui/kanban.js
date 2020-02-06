import dragula from 'dragula'

export default function Kanban() {
	const boxArray = document.getElementsByClassName('board')
	const boxes = Array.prototype.slice.call(boxArray)
	
	dragula({ containers: boxes })
}
