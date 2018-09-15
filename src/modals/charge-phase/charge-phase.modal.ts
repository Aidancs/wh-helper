import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { BaseModal } from '../../base/base-modal';

@Component({
  selector: 'charge-phase.modal',
  templateUrl: 'charge-phase.modal.html',
})
export class ChargePhaseModal extends BaseModal implements OnInit {

  list: any;
  chargePhaseList: any;
  commandAbilitiesList: any;

  constructor(
    private navParams: NavParams,
    viewCtrl: ViewController,
  ) {
    super(viewCtrl);
  }

  ngOnInit() {
    this.chargePhaseList = this.navParams.get('chargePhaseList');
    let check = this.navParams.get('commandAbilitiesList');
    for (let i = 0; i < check.length; ++i) {
      if (check[i].phase === 'charge') {
        this.commandAbilitiesList.push(check[i])
      }
    }
    console.log(this.commandAbilitiesList, 'commandAbilitiesList')
    console.log(this.chargePhaseList, 'chargePhaseList')
  }

}
