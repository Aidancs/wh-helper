import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { BaseModal } from '../../base/base-modal';

@Component({
  selector: 'battleshock-phase.modal',
  templateUrl: 'battleshock-phase.modal.html',
})
export class BattleshockPhaseModal extends BaseModal implements OnInit {

  list: any;
  battleshockPhaseList: any;
  commandAbilitiesList: any;

  constructor(
    private navParams: NavParams,
    viewCtrl: ViewController,
  ) {
    super(viewCtrl);
  }

  ngOnInit() {
    this.battleshockPhaseList = this.navParams.get('battleshockPhaseList');
    let check = this.navParams.get('commandAbilitiesList');
    for (let i = 0; i < check.length; ++i) {
      if (check[i].phase === 'battleshock') {
        this.commandAbilitiesList.push(check[i])
      }
    }

    console.log(this.commandAbilitiesList, 'commandAbilitiesList')
    console.log(this.battleshockPhaseList, 'battleshockPhaseList')
  }

}
