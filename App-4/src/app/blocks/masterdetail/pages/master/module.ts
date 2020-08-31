import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterPageRoutingModule } from './routing.module';
import { MasterPage } from './page';
import { ComponentsDetailsModule } from '../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		MasterPageRoutingModule,
		ComponentsDetailsModule
	],
	declarations: [MasterPage]
})
export class MasterPageModule {}
