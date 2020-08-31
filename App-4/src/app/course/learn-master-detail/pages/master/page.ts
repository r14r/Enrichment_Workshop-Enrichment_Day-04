import { Component, OnInit } from '@angular/core';
import { MasterDetailTodoService } from '../../services/todo.service';
import { HelperService } from 'src/app/helpers/helper.service';
import { ParameterStoreService } from '../../services/parameterstore.service';

@Component({
	selector: 'app-list',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class MasterDetailsMasterPage implements OnInit {
	private ID = 'MasterDetailsMasterPage';
	private helper = new HelperService(this.ID);

	private selectedItem: any;
	private icons = [
		'flask',
		'wifi',
		'beer',
		'football',
		'basketball',
		'paper-plane',
		'american-football',
		'boat',
		'bluetooth',
		'build'
	];
	public items: Array<{ title: string; note: string; icon: string }> = [];

	todos;

	constructor(
		private todoService: MasterDetailTodoService,
		public paramService: ParameterStoreService
		) {
		this.helper.log('constructor');

		this.todos = todoService.todos;

		/*
		for (const todo of this.todos) {
			this.helper.log('constructor', 'todo=' + JSON.stringify(todo));
		}
		*/

		/*
		for (let i = 1; i < 11; i++) {
			this.items.push({

				title: 'Item ' + i,
				note: 'This is item #' + i,
				icon: this.icons[Math.floor(Math.random() * this.icons.length)]
			});
		}
		*/
	}

	ngOnInit() {
	}
 
	onClick(todo) {
		this.helper.log('onClick', 'todo=' + JSON.stringify(todo));
		this.paramService.set(todo);
	}
}
