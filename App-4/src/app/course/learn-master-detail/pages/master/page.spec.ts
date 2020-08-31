import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasterDetailsMasterPage } from './page';

describe('ListPage', () => {
	let component: MasterDetailsMasterPage;
	let fixture: ComponentFixture<MasterDetailsMasterPage>;
	let listPage: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MasterDetailsMasterPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(MasterDetailsMasterPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have a list of 10 elements', () => {
		listPage = fixture.nativeElement;
		const items = listPage.querySelectorAll('ion-item');
		expect(items.length).toEqual(10);
	});

});
