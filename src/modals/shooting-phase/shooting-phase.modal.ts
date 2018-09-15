import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { BaseModal } from '../../base/base-modal';

@Component({
  selector: 'shooting-phase.modal',
  templateUrl: 'shooting-phase.modal.html',
})
export class ShootingPhaseModal extends BaseModal implements OnInit {

  list: any;
  shootingPhaseList: any;
  commandAbilitiesList: any;

  constructor(
    private navParams: NavParams,
    viewCtrl: ViewController,
  ) {
    super(viewCtrl);
  }

  ngOnInit() {
    this.shootingPhaseList = this.navParams.get('shootingPhaseList');
    this.commandAbilitiesList = this.navParams.get('commandAbilitiesList');
    console.log(this.commandAbilitiesList, 'commandAbilitiesList')
    console.log(this.shootingPhaseList, 'shootingPhaseList')
  }

}
