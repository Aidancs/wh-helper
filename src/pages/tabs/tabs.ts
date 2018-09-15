import { Component } from '@angular/core';

import { ModelsPage } from '../models/models';
import { ContactPage } from '../contact/contact';
import { PhasesPage } from '../phases/phases';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PhasesPage;
  tab2Root = ModelsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}


