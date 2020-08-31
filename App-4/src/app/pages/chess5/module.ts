import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Chess5Page } from './page';

const routes: Routes = [{ path: '', component: Chess5Page }];

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	declarations: [Chess5Page]
})
export class Chess5PageModule { }
