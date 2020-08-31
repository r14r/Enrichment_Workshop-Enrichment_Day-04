import { Component, OnInit, Input } from '@angular/core';

import { DemoHelperService } from '../../services/helper.service';

@Component({
	selector: 'app-details-item',
	templateUrl: './component.html',
	styleUrls: ['./component.scss']
})
export class DetailsItemComponent implements OnInit {
	helper = new DemoHelperService('DetailsItemComponent');

	theItem: DetailsItem;

	@Input() set item(val: DetailsItem) {
		this.theItem = val;
	}

	@Input() details: boolean;

	constructor() {
		this.helper.log('constructor', 'item=' + this.theItem);
	}

	ngOnInit() {
		this.helper.log('ngOnInit', 'item=' + JSON.stringify(this.theItem));
	}

	share(item) {
		this.helper.log('share');
	}

	favorite(item) {
		this.helper.log('favorite');
	}

	unread(item) {
		this.helper.log('unread');
	}
}
