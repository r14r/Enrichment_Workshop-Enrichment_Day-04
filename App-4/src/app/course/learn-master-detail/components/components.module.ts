import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DetailsComponent } from './details/component';

@NgModule({
	declarations: [DetailsComponent],
	exports: [DetailsComponent],
	imports: [CommonModule, IonicModule]
})
export class ComponentsModule {}
