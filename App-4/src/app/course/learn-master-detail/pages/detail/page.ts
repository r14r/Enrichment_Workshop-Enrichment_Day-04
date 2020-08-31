import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParameterStoreService } from '../../services/parameterstore.service';
import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-master-details-detail',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class MasterDetailsDetailPage {
	private ID = 'MasterDetailsDetailPage';
	private helper = new HelperService(this.ID);

	id: any;
	todo;

	constructor(
		private activatedRoute: ActivatedRoute,
		public paramService: ParameterStoreService
	) {
		this.helper.log('constructor');
		this.id = activatedRoute.snapshot.paramMap.get('id');

		this.todo = paramService.get();
		this.helper.log('constructor', 'todo=' + this.todo);
	}
}
