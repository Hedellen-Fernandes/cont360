
import '../scss/main.scss'
import '../../node_modules/jkanban/dist/jkanban.js'

import Nav from './ui/nav'
import Kanban from './ui/kanban'
import Datepicker from './ui/date-picker'
import labelMaterial from './ui/label-material'

function Initialize() {
	const Ui = () => {
		Nav()
		Kanban()
		Datepicker()
		labelMaterial()
	}

	Ui()
}

Initialize()
