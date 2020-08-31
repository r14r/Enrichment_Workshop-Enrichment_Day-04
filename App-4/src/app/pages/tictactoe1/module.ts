import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TicTacToe1Page } from './page';

const routes: Routes = [
	{ path: '', component: TicTacToe1Page }
];

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	declarations: [TicTacToe1Page]
})
export class TicTacToe1PageModule { }
