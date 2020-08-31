import { Component, OnInit } from '@angular/core';

import { DemoHelperService } from '../../services/helper.service';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-home',
	templateUrl: './page.html',
	styleUrls: ['./page.scss']
})
export class MasterPage implements OnInit {
	helper = new DemoHelperService('MasterPage');

	items: any;

	constructor(public dataService: DataService) {
		this.helper.log('constructor');

		this.items = dataService.getItems();

		this.helper.log('constructor', 'das hat funktonier');
	}

	ngOnInit() {
		this.helper.log('ngOnInit');
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
