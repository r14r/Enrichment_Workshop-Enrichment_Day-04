import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-game',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class TicTacToe1Page {
	private MODULE = 'TicTacToe1Page';

	cellPlayer = 'x';
	cellOponent = 'o';
	cellEmpty = 'empty';

	squares = Array(9).fill(this.cellEmpty);
	player = 'x';

	winner = null;

	private ID = 'TicTacToe1Page';
	private HelperService = new HelperService(this.ID);

	constructor(public router: Router) {
		this.HelperService.log('constructor');
	}

	get gameStatusMessage() {
		const message = this.winner
			? `${this.winner} has won!`
			: `${this.player}'s turn`;

		return message;
	}

	handleMove(position) {
		this.HelperService.log('handleMove', 'position=' + position);

		if (this.winner) {
			this.HelperService.log('handleMove', ' has winner ' + this.winner);
			return;
		}

		if (this.squares[position] !== this.cellEmpty) {
			this.HelperService.log('handleMove', 'cell not empty' + this.squares[position]);
			return;
		}

		this.HelperService.log('handleMove', 'move=' + this.player);

		this.squares[position] = this.player;

		if (this.winnigMove()) {
			this.winner = this.player;
			this.HelperService.log('handleMove', 'found winner ' + this.winner);
		}

		this.player =
			this.player === this.cellPlayer
				? this.cellOponent
				: this.cellPlayer;
	}

	winnigMove() {
		this.HelperService.log('winningMove', '');

		const conditions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // rows
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // colums
			[0, 4, 8],
			[2, 4, 6] // diagonal
		];
		for (const condition of conditions) {
			if (
				this.squares[condition[0]] !== this.cellEmpty &&
				this.squares[condition[0]] === this.squares[condition[1]] &&
				this.squares[condition[1]] === this.squares[condition[2]]
			) {
				return true;
			}
		}
		return false;
	}

	restartGame() {
		this.squares = Array(9).fill(this.cellEmpty);
		this.player = this.cellPlayer;
		this.winner = null;
	}
}
