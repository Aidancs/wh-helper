import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { BaseModal } from '../../base/base-modal';

@Component({
	selector: 'unit.modal',
	templateUrl: 'unit.modal.html',
})
export class UnitModal extends BaseModal implements OnInit {

	unit;
	extra: boolean = false;

	constructor(
		private navParams: NavParams,
		viewCtrl: ViewController,
	) {
		super(viewCtrl);
	}

	ngOnInit() {
		this.unit = this.navParams.get('unit');
		if (this.unit.number_of_models_in_unit > 1) {
			this.extra = true;
		}
	}

	wounded() {
		// if (this.unit.number_of_models_in_unit > 1 && this.unit.number_of_models_in_unit === this.unit.wounded) {
		// 	if (this.unit.wounded > 0) {
		// 		if (this.unit.wounded === 1) {
		// 			this.unit.activated = false;
		// 		}
		// 		--this.unit.wounded;
		// 		--this.unit.number_of_models_in_unit;
		// 	}
		// }
		if (this.unit.wounded > 0) {
			if (this.unit.wounded === 1) {
				this.unit.activated = false;
			}
			--this.unit.wounded;
		}
	}

	heal() {
		if (this.unit.wounded < this.unit.wounds) {
			if (this.unit.wounded === 0) {
				this.unit.activated = true;
			}
			++this.unit.wounded;
		}
	}
}
