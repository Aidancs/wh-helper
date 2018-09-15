import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { BaseModal } from '../../base/base-modal';

@Component({
  selector: 'combat-phase.modal',
  templateUrl: 'combat-phase.modal.html',
})
export class CombatPhaseModal extends BaseModal implements OnInit {

  list: any;
  combatPhaseList: any;
  commandAbilitiesList: any;

  constructor(
    private navParams: NavParams,
    viewCtrl: ViewController,
  ) {
    super(viewCtrl);
  }

  ngOnInit() {
    this.combatPhaseList = this.navParams.get('combatPhaseList');
    this.commandAbilitiesList = this.navParams.get('commandAbilitiesList');
    console.log(this.commandAbilitiesList, 'commandAbilitiesList')
    console.log(this.combatPhaseList, 'combatPhaseList')
  }

}
