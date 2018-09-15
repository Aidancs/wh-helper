import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { UnitModal } from '../../modals/unit/unit.modal';
import { UnitService } from '../../services/unit.service';

@Component({
	selector: 'page-models',
	templateUrl: 'models.html'
})
export class ModelsPage {

	unitList: Array<any> = [];

	constructor(
		private modalCtrl: ModalController,
		public navCtrl: NavController,
		private unitSvc: UnitService,
	) { }

	ngOnInit() {
		try {
			this.unitSvc.getUnitJSon().subscribe(result => {
				console.log(result, 'result')
				this.unitList = result;
				console.log(this.unitList, 'this.unitlist')

			});
		} catch (e) {
			console.log("Profile" + e);
		}
	}

	openUnit(unit) {
		console.log(unit)
		let modal = this.modalCtrl.create(UnitModal, {
			unit: unit,
		});
		modal.onDidDismiss(data => {
			console.log(data, 'in unit modal on dismiss')
		});
		modal.present();
	}
}
