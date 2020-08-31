import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DemoHelperService {
	private PREFIX: string;

	constructor(prefix) {
		this.PREFIX = prefix;
	}

	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '|' + line);
	}
}
