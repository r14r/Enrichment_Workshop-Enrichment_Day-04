import { Injectable } from '@angular/core';
import { DemoHelperService } from './helper.service';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	helper = new DemoHelperService('DataService');

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

	public items: Array<DetailsItem> = [];

	constructor() {
		this.helper.log('constructor');

		for (let i = 0; i < 10; i++) {
			this.items.push({
				id: i,
				title: 'Item ' + i,
				note: 'This is item #' + i,
				icon: this.icons[Math.floor(Math.random() * this.icons.length)],
				price: -1
			});
		}
	}

	getItems() {
		this.helper.log('getItems');
		return this.items;
	}

	getItem(id): DetailsItem {
		this.helper.log('getItem', 'id=' + id);

		const item = this.items[id];
		this.helper.log('getItem', 'item=' + JSON.stringify(item));

		return item;
	}
}
