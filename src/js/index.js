
import '../scss/main.scss'
import '../../node_modules/jkanban/dist/jkanban.js'

import Nav from './ui/nav'
import Kanban from './ui/kanban'

function Initialize() {
	const Ui = () => {
		Nav()
		Kanban()
	}

	Ui()
}

Initialize()
