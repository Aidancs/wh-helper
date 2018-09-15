import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { BaseModal } from '../../base/base-modal';

@Component({
  selector: 'movement-phase.modal',
  templateUrl: 'movement-phase.modal.html',
})
export class MovementPhaseModal extends BaseModal implements OnInit {

  list: any;
  movementPhaseList: any;
  commandAbilitiesList: any;

  constructor(
    private navParams: NavParams,
    viewCtrl: ViewController,
  ) {
    super(viewCtrl);
  }

  ngOnInit() {
    this.movementPhaseList = this.navParams.get('movementPhaseList');
    this.commandAbilitiesList = this.navParams.get('commandAbilitiesList');
    console.log(this.commandAbilitiesList, 'commandAbilitiesList')
    console.log(this.movementPhaseList, 'movementPhaseList')
  }

}
