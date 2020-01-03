/* eslint-disable no-undef */
export default async function Kanban() {

	const tasksKanban = document.getElementById('tasksKanban')

	let tasksKanbanProps = await {
		width: tasksKanban.offsetWidth
	}

	let kanban = new jKanban({
		element: '#tasksKanban',
		widthBoard: (tasksKanbanProps.width / 3) - 18,
		boards: [
			{
				id: '_todo',
				title: 'Nova tarefa',
				class: 'info,good',
				dragTo: ['_working'],
				item: [
					{
						id: '_test_delete',
						title: 'Try drag this (Look the console)',
						username: 'hedellen',
						drag: function (el) {
							console.log('START DRAG: ' + el.dataset.eid)
						},
						dragend: function (el) {
							console.log('END DRAG: ' + el.dataset.eid)
						},
						drop: function (el) {
							console.log('DROPPED: ' + el.dataset.eid)
						}
					},
					{
						title: 'Try Click This!',
						click: function () {
							alert('click')
						},
						username: "username1",
						class: ['peppe', 'bello']
					}
				]
			},
			{
				id: '_working',
				title: 'Em andamento',
				class: 'warning',
				item: [
					{
						title: 'Do Something!'
					},
					{
						title: 'Run?'
					}
				]
			},
			{
				id: '_done',
				title: 'Concluído',
				class: 'success',
				dragTo: ['_working'],
				item: [
					{
						title: 'All right'
					},
					{
						title: 'Ok!'
					}
				]
			}
		]
	})

	return kanban
}
