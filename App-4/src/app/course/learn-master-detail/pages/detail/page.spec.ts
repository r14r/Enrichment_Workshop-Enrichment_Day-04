import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasterDetailsDetailPage } from './page';

describe('HomePage', () => {
	let component: MasterDetailsDetailPage;
	let fixture: ComponentFixture<MasterDetailsDetailPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MasterDetailsDetailPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(MasterDetailsDetailPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
