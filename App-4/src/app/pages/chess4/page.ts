import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-chessboard-js',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Chess4Page implements OnInit {

	private ID = 'Chess4Page';
	private HelperService = new HelperService(this.ID);

	constructor() { }

	ngOnInit() {
	}

}
