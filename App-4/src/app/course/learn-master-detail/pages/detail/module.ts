import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MasterDetailsDetailPage } from './page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ComponentsModule,
		RouterModule.forChild([
			{
				path: '',
				component: MasterDetailsDetailPage
			}
		])
	],
	declarations: [MasterDetailsDetailPage]
})
export class MasterDetailsDetailPageModule { }
