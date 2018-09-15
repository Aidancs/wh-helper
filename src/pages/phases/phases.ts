import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

// services
import { UnitService } from '../../services/unit.service';

// modals
import { HeroPhaseModal } from '../../modals/hero-phase/hero-phase.modal';
import { MovementPhaseModal } from '../../modals/movement-phase/movement-phase.modal';
import { ShootingPhaseModal } from '../../modals/shooting-phase/shooting-phase.modal';
import { ChargePhaseModal } from '../../modals/charge-phase/charge-phase.modal';
import { CombatPhaseModal } from '../../modals/combat-phase/combat-phase.modal';
import { BattleshockPhaseModal } from '../../modals/battleshock-phase/battleshock-phase.modal';


@Component({
	selector: 'page-phases',
	templateUrl: 'phases.html'
})
export class PhasesPage {

	abilitiesList: Array<any> = [];
	battleshockList: Array<any> = [];
	chargeList: Array<any> = [];
	combatList: Array<any> = [];
	commandAbilitiesList: Array<any> = [];
	heroList: Array<any> = [];
	movementList: Array<any> = [];
	shootingList: Array<any> = [];
	unitList: Array<any> = [];

	constructor(
		private modalCtrl: ModalController,
		public navCtrl: NavController,
		private unitSvc: UnitService,
	) { }

	ngOnInit() {
		try {
			this.unitSvc.getKoJSon().subscribe(result => {
				for (var index = 0; index < result.length; ++index) {
					if (result[index].command_abilities !== 0) {
						this.commandAbilitiesList.push(result[index].command_abilities);
					}
					for (var i = 0; i < result[index].abilities.length; ++i) {
						if (result[index].abilities[i].phase === 'hero') {
							this.heroList.push(result[index].abilities[i]);
						} else if (result[index].abilities[i].phase === 'movement') {
							this.movementList.push(result[index].abilities[i]);
						} else if (result[index].abilities[i].phase === 'shooting') {
							this.shootingList.push(result[index].abilities[i]);
						} else if (result[index].abilities[i].phase === 'charge') {
							this.chargeList.push(result[index].abilities[i]);
						} else if (result[index].abilities[i].phase === 'combat') {
							this.combatList.push(result[index].abilities[i]);
						} else if (result[index].abilities[i].phase === 'battleshock') {
							this.battleshockList.push(result[index].abilities[i]);
						} else if (result[index].abilities[i].phase === 'shooting/combat') {
							this.shootingList.push(result[index].abilities[i]);
							this.combatList.push(result[index].abilities[i]);
						}
					}
				}
			});

		} catch (e) {
			console.log("Profile" + e);
		}
	}

	launchHeroPhaseModal() {
		let modal = this.modalCtrl.create(HeroPhaseModal, {
			heroPhaseList: this.heroList,
			commandAbilitiesList: this.commandAbilitiesList,
		});
		modal.onDidDismiss(data => {
			console.log(data, 'in hero modal on dismiss')
		});
		modal.present();
	}

	launchMovementPhaseModal() {
		let modal = this.modalCtrl.create(MovementPhaseModal, {
			movementPhaseList: this.movementList,
			commandAbilitiesList: this.commandAbilitiesList,
		});
		modal.onDidDismiss(data => {
			console.log(data, 'in movement modal on dismiss')
		});
		modal.present();
	}

	launchShootingPhaseModal() {
		let modal = this.modalCtrl.create(ShootingPhaseModal, {
			shootingPhaseList: this.shootingList,
			commandAbilitiesList: this.commandAbilitiesList,
		});
		modal.onDidDismiss(data => {
			console.log(data, 'in shooting modal on dismiss')
		});
		modal.present();
	}

	launchChargePhaseModal() {
		let modal = this.modalCtrl.create(ChargePhaseModal, {
			chargePhaseList: this.chargeList,
			commandAbilitiesList: this.commandAbilitiesList,
		});
		modal.onDidDismiss(data => {
			console.log(data, 'in charge modal on dismiss')
		});
		modal.present();
	}

	launchCombatPhaseModal() {
		let modal = this.modalCtrl.create(CombatPhaseModal, {
			combatPhaseList: this.combatList,
			commandAbilitiesList: this.commandAbilitiesList,
		});
		modal.onDidDismiss(data => {
			console.log(data, 'in combat modal on dismiss')
		});
		modal.present();
	}


	launchBattleshockPhaseModal() {
		let modal = this.modalCtrl.create(BattleshockPhaseModal, {
			battleshockPhaseList: this.battleshockList,
			commandAbilitiesList: this.commandAbilitiesList,
		});
		modal.onDidDismiss(data => {
			console.log(data, 'in battleshock modal on dismiss')
		});
		modal.present();
	}
}
