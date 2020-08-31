import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './routing.module';

import { DetailPage } from './page';

import { ComponentsDetailsModule } from '../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DetailPageRoutingModule,
		ComponentsDetailsModule
	],
	declarations: [DetailPage]
})
export class DetailPageModule {}
