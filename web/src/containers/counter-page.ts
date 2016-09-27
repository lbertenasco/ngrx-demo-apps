import 'rxjs/add/operator/let';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as counterActions from '../actions/counter';


@Component({
  selector: 'counter-page',
  template: `
    <div class="container">
      <h1>
        Ngrx/Angular2 web app
      </h1>
      <hr/>
      <h2>
          {{counter$ | async}}
      </h2>
      <p>
        <button (click)="increment()" class="btn btn-primary"> +1 </button>
        <button (click)="decrement()" class="btn btn-primary"> -1 </button>
      </p>
      <p>
        <button (click)="reset()" class="btn btn-primary"> Reset </button>
      </p>
      <!--app-foo></app-foo-->
    </div>
  `
})
export class CounterPageComponent {
  counter$: Observable<number>;

  constructor(private store: Store<fromRoot.State>) {
    this.counter$ = this.store.select(s => s.counter.total);
  }

  decrement() {
    console.log('decrement');
    this.store.dispatch(new counterActions.DecrementAction());
  }

  increment() {
    console.log('increment');
    this.store.dispatch(new counterActions.IncrementAction());
  }

  reset() {
    console.log('reset');
    this.store.dispatch(new counterActions.ResetAction());
  }
}
