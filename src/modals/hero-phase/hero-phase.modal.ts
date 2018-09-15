import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { BaseModal } from '../../base/base-modal';

@Component({
  selector: 'hero-phase.modal',
  templateUrl: 'hero-phase.modal.html',
})
export class HeroPhaseModal extends BaseModal implements OnInit {

  list: any;
  heroPhaseList: any;
  commandAbilitiesList: any;

  constructor(
    private navParams: NavParams,
    viewCtrl: ViewController,
  ) {
    super(viewCtrl);
  }

  ngOnInit() {
    this.heroPhaseList = this.navParams.get('heroPhaseList');
    this.commandAbilitiesList = this.navParams.get('commandAbilitiesList');
    console.log(this.commandAbilitiesList, 'commandAbilitiesList')
    console.log(this.heroPhaseList, 'heroPhaseList')
  }

}
