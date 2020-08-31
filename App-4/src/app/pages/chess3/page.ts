import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-chess-js',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Chess3Page implements OnInit {

	private ID = 'Chess3Page';
	private HelperService = new HelperService(this.ID);

	constructor() { }

	ngOnInit() {
	}

}
