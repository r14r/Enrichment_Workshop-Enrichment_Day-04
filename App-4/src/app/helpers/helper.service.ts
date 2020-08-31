import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HelperService {
	private prefix: string;

	constructor(prefix: string) {
		this.prefix = prefix;
	}

	log(func, line = '') {
		console.log(this.prefix + '::' + func + '|' + line);
	}
}
