import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-chess',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Chess1Page implements OnInit {

	@ViewChild('board', { read: ElementRef, static: true }) elementRefBoard: ElementRef;

	maxRow = 4;
	maxCol = 4;

	board: any;

	private ID = 'Chess1Page';
	private HelperService = new HelperService(this.ID);

	constructor(private el: ElementRef) {
		this.HelperService.log('constructor');

		this.board = [];

		for (let row = 0; row < this.maxRow; row++) {
			this.board[row] = [];
			for (let col = 0; col < this.maxCol; col++) {
				const result = Math.random() < .075;

				this.board[row][col] = result;
			}
		}
	}

	ngOnInit() {
		this.HelperService.log('ngOnInit', 'board=' + this.elementRefBoard);


		let space = 1;
		for (let r = 0; r < 8; r++) {
			let col = '';
			for (let c = 0; c < 8; c++) {
				col += '<td data-pos=\'' + space + '\'></td>'; space++;
			}
			this.elementRefBoard.nativeElement.append('<tr>' + col + '</tr>');
		}
	}
}
