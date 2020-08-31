import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chess1Page } from './page';

describe('ChessPage', () => {
	let component: Chess1Page;
	let fixture: ComponentFixture<Chess1Page>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Chess1Page],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Chess1Page);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
