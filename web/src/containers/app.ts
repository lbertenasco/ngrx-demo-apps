import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';

@Component({
  selector: 'ngrx-demo-app',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private store: Store<fromRoot.State>) { }

}
