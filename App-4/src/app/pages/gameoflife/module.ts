import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { GameOfLivePage } from './page';

const routes: Routes = [{ path: '', component: GameOfLivePage }];

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
	declarations: [GameOfLivePage]
})
export class GameOfLivePageModule { }
