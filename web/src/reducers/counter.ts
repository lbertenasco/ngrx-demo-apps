import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CounterActions, CounterActionTypes } from '../actions/counter';


export interface State {

  total: number;

}

export let initialState: State = {
  total: 0
};


export function reducer(state = initialState, action: CounterActions): State {
  switch (action.type) {

    case CounterActionTypes.INCREMENT:
      return Object.assign({}, state, {
          total : state.total + 1
      });

    case CounterActionTypes.DECREMENT:
      return Object.assign({}, state, {
          total : state.total - 1
      });

    case CounterActionTypes.RESET_SUCCESS:
      return initialState;


    default: {
      return state;
    }
  }
}
