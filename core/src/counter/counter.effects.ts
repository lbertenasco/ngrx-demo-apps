import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { StateUpdates, Effect, toPayload } from '@ngrx/effects'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { CounterActionTypes, ResetSuccessAction } from './';

@Injectable()
export class CounterEffects {
  constructor(private updates$: StateUpdates<any>) { }

  @Effect() resetSuccess$ = this.updates$
      // Listen for the 'RESET' action
      .whenAction(CounterActionTypes.RESET)
      .map(toPayload)
      .map(payload => {
            console.log('Doing some stuff on reset action');
            return new ResetSuccessAction();
        });
}
