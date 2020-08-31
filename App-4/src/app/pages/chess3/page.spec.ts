import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chess3Page } from './page';

describe('Chess3Page', () => {
	let component: Chess3Page;
	let fixture: ComponentFixture<Chess3Page>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Chess3Page],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Chess3Page);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
