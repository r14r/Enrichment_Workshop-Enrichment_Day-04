import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	public appPages = [
		{ title: 'Home', url: '/home', icon: 'home' },
		{ title: 'List', url: '/list', icon: 'list' },
		{ title: 'Master-Detail', url: '/master', icon: 'list' },




		/*
		{ title: 'Game of Life', url: '/gameoflife', icon: 'game' },
		{ title: 'Tic Tac Toe: 1', url: '/tictactoe/1', icon: 'grid' },
		{ title: 'Chess: 1', url: '/chess/1', icon: 'list' },
		{ title: 'Chess: 2', url: '/chess/2', icon: 'list' },
		{ title: 'Chess: 3', url: '/chess/3', icon: 'list' },
		{ title: 'Chess: 4', url: '/chess/4', icon: 'list' },
		{ title: 'Chess: 5', url: '/chess/5', icon: 'list' },

		{ title: 'Master-Detail', url: '/master', icon: 'list' },
				*/
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
