import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-realtime-chess',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Chess5Page implements OnInit {

	private ID = 'Chess5Page';
	private HelperService = new HelperService(this.ID);

	constructor() { }

	ngOnInit() {
	}

}
