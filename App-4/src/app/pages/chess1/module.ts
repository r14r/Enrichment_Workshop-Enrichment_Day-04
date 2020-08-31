import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { Chess1Page } from './page';

const routes: Routes = [{ path: '', component: Chess1Page }];

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	declarations: [Chess1Page]
})
export class Chess1PageModule { }
