import { Component, OnInit, ElementRef } from '@angular/core';
import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-chess2',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Chess2Page implements OnInit {

	rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	columns = [1, 2, 3, 4, 5, 6, 7, 8];

	pos = [];

	initialIdx: any;
	destinationIdx: any;

	moveText: any;
	moveDest: any;

	private ID = 'Chess2Page';
	private HelperService = new HelperService(this.ID);

	constructor(private el: ElementRef) { }

	ngOnInit() {
	}

	move() {

		const initial = this.el.nativeElement.querySelector('.initial');
		const destination = this.el.nativeElement.querySelector('.destination');

		// Piece class e.g. 'WP'
		const piece = initial[0].className.split(' ')[3];

		const checkPos = destination[0].className.split(' ');
		const blkWht = checkPos[checkPos.length - 2].substring(0, 1);

		// check if position is white or black piece already
		if (blkWht === 'W' || blkWht === 'B') {

			// remove the overtaken piece class
			destination.removeClass(checkPos[checkPos.length - 2].substring(0, 2));
			// @TODO: toastr.success('Wow! Nice move!');
			console.log('success: Wow! Nice move!');
		}

		// Add class to overtaken position
		destination.addClass(initial[0].className.split(' ')[3]);

		// reset square
		initial.removeClass(piece);

		// reset ng-class values
		this.initialIdx = false;
		this.destinationIdx = false;
	}

	// Toggle of selected / destination markers on board
	getInitial(col, row, idx, idxp) {

		this.pos.push(idx, idxp);

		// ng-class '.initial' or '.destination' applied to selected element
		this.initialIdx = [this.pos[0], this.pos[1]];
		this.destinationIdx = [this.pos[2], this.pos[3]];

		if (this.pos.length >= 4) { this.pos.splice(0); }


	}


	textMove() {
		if (this.moveText.length === 4) {
			const piece = this.moveText.substring(0, 2).toUpperCase();
			const position = this.moveText.substring(2, 4).toUpperCase();
			const init = this.el.nativeElement.querySelector(`.${position}`);
			init.removeClass(piece);
		}
		if (this.moveDest.length === 2) {
			const position = this.moveDest.substring(0, 2).toUpperCase();
			const destination = this.el.nativeElement.querySelector(`.${position}`);
			destination.addClass(this.piece);
		}

	}

	piece(row, col) {
		const sqr = row + col;

		// white
		if (col === 2) { return 'WP'; }
		if (sqr === 'A1' || sqr === 'H1') { return 'WR'; }
		if (sqr === 'B1' || sqr === 'G1') { return 'WH'; }
		if (sqr === 'C1' || sqr === 'F1') { return 'WB'; }
		if (sqr === 'D1') { return 'WQ'; }
		if (sqr === 'E1') { return 'WK'; }

		// Black
		if (col === 7) { return 'BP'; }
		if (sqr === 'H8' || sqr === 'H8') { return 'BR'; }
		if (sqr === 'A8' || sqr === 'H8') { return 'BR'; }
		if (sqr === 'B8' || sqr === 'G8') { return 'BH'; }
		if (sqr === 'C8' || sqr === 'F8') { return 'BB'; }
		if (sqr === 'D8') { return 'BQ'; }
		if (sqr === 'E8') { return 'BK'; }
	}

}
