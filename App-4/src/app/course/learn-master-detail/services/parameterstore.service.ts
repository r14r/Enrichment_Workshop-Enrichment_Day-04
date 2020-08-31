import { Injectable } from '@angular/core';
import { HelperService } from 'src/app/helpers/helper.service';

@Injectable({
	providedIn: 'root'
})
export class ParameterStoreService {
	private ID = 'ParameterStoreService';
	private helper = new HelperService(this.ID);

	todo;

	constructor() {
	}

	set(todo) {
		this.todo = todo;

		this.helper.log('set', 'todo=' + JSON.stringify(this.todo));
	}

	get() {
		this.helper.log('get', 'todo=' + JSON.stringify(this.todo));
		return this.todo;
	}
}
