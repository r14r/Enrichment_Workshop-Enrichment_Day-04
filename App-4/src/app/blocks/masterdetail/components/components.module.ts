import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DetailsItemComponent } from './details-item/component';

@NgModule({
	declarations: [DetailsItemComponent],
	exports: [DetailsItemComponent],
	imports: [CommonModule, IonicModule]
})
export class ComponentsDetailsModule {}
