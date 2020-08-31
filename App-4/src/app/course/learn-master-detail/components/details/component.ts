import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-details',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})
export class DetailsComponent implements OnInit {
	constructor() {}

	theTodo;

	ngOnInit() {}

	@Input() set todo(val: MasterDetailTodo) {
		console.log('DetailsComponent::set todo | val=', JSON.stringify(val));
		this.theTodo = val !== undefined && val !== null ? val : '';

		console.log('DetailsComponent::set todo | todo=', JSON.stringify(this.theTodo));

	}
}
