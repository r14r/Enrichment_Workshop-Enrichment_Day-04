import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { DemoHelperService } from '../../services/helper.service';

@Component({
	selector: 'app-detail',
	templateUrl: './page.html',
	styleUrls: ['./page.scss']
})
export class DetailPage implements OnInit {
	helper = new DemoHelperService('DetailPage');

	id;

	item;

	constructor(
		private route: ActivatedRoute,
		private dataService: DataService
	) {
		this.id = route.snapshot.paramMap.get('id');

		this.item = dataService.getItem(this.id);
		this.helper.log('getItem', 'item=' + this.item);
	}

	ngOnInit() {}
}
