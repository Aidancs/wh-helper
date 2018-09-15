import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// services
import { UnitService } from '../services/unit.service';

// modals
import { BattleshockPhaseModal } from '../modals/battleshock-phase/battleshock-phase.modal';
import { ChargePhaseModal } from '../modals/charge-phase/charge-phase.modal';
import { CombatPhaseModal } from '../modals/combat-phase/combat-phase.modal';
import { HeroPhaseModal } from '../modals/hero-phase/hero-phase.modal';
import { MovementPhaseModal } from '../modals/movement-phase/movement-phase.modal';
import { ShootingPhaseModal } from '../modals/shooting-phase/shooting-phase.modal';
import { UnitModal } from '../modals/unit/unit.modal';

import { ContactPage } from '../pages/contact/contact';
import { ModelsPage } from '../pages/models/models';
import { PhasesPage } from '../pages/phases/phases';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
	declarations: [
		MyApp,
		ContactPage,
		ModelsPage,
		PhasesPage,
		TabsPage,
		// modals
		BattleshockPhaseModal,
		ChargePhaseModal,
		CombatPhaseModal,
		HeroPhaseModal,
		MovementPhaseModal,
		ShootingPhaseModal,
		UnitModal,
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		ContactPage,
		ModelsPage,
		PhasesPage,
		TabsPage,
		// modals
		BattleshockPhaseModal,
		ChargePhaseModal,
		CombatPhaseModal,
		HeroPhaseModal,
		MovementPhaseModal,
		ShootingPhaseModal,
		UnitModal,
	],
	providers: [
		UnitService,
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
