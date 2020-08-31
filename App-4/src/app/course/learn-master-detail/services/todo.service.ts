import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MasterDetailTodoService {

	public todos: MasterDetailTodo[] = [];

	constructor() {

		this.todos = [
			{ id: '01', title: 'Todo One', description: 'Do Stuff' },
			{ id: '02', title: 'Todo Two', description: 'Do Stuff' },
			{ id: '03', title: 'Todo Three', description: 'Do Stuff' },
			{ id: '04', title: 'Todo Four', description: 'Do Stuff' },
			{ id: '05', title: 'Todo Five', description: 'Do Stuff' },
			{ id: '06', title: 'Todo Six', description: 'Do Stuff' }
		];
	}
}
