import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsItemComponent } from './component';

describe('DetailsItemComponent', () => {
	let component: DetailsItemComponent;
	let fixture: ComponentFixture<DetailsItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DetailsItemComponent],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(DetailsItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
