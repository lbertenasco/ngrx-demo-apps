import { Routes } from '@angular/router';

import { CounterPageComponent } from './containers/counter-page';

declare var System: any;
declare var PROD: any;


export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  }
];
