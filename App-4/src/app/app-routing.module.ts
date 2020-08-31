import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadChildren: () =>
			import('./pages.base/home/home.module').then(m => m.HomePageModule)
	},
	{
		path: 'list',
		loadChildren: () =>
			import('./pages.base/list/list.module').then(m => m.ListPageModule)
	},
	{
		path: 'gameoflife',
		loadChildren: () =>
			import('./pages/gameoflife/module').then(
				m => m.GameOfLivePageModule
			)
	},
	{
		path: 'tictactoe/1',
		loadChildren: () =>
			import('./pages/tictactoe1/module').then(
				m => m.TicTacToe1PageModule
			)
	},
	{
		path: 'chess/1',
		loadChildren: () =>
			import('./pages/chess1/module').then(m => m.Chess1PageModule)
	},
	{
		path: 'chess/2',
		loadChildren: () =>
			import('./pages/chess2/module').then(m => m.Chess2PageModule)
	},
	{
		path: 'chess/3',
		loadChildren: () =>
			import('./pages/chess3/module').then(m => m.Chess3PageModule)
	},
	{
		path: 'chess/4',
		loadChildren: () =>
			import('./pages/chess4/module').then(m => m.Chess4PageModule)
	},
	{
		path: 'chess/5',
		loadChildren: () =>
			import('./pages/chess5/module').then(m => m.Chess5PageModule)
	},

	{
		path: 'masterdetails',
		loadChildren:
			'./course/learn-master-detail/pages/master/module#MasterDetailsMasterPageModule'
	},
	{
		path: 'masterdetail/:id',
		loadChildren:
			'./course/learn-master-detail/pages/detail/module#MasterDetailsDetailPageModule'
	},
	{
		path: 'master',
		loadChildren: () =>
			import('./blocks/masterdetail/pages/master/module').then(
				m => m.MasterPageModule
			)
	},
	{
		path: 'detail',
		loadChildren: () =>
			import('./blocks/masterdetail/pages/detail/module').then(
				m => m.DetailPageModule
			)
	},
	{
		path: 'detail/:id',
		loadChildren: () =>
			import('./blocks/masterdetail/pages/detail/module').then(
				m => m.DetailPageModule
			)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			enableTracing: false,
			preloadingStrategy: PreloadAllModules
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
