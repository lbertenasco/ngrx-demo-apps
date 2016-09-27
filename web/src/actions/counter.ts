import { Action } from '@ngrx/store';
import { label } from '../util';

export const CounterActionTypes = {
  INCREMENT: label('[Layout] Increment'),
  DECREMENT: label('[Layout] Decrement'),
  RESET: label('[Layout] Reset'),
  RESET_SUCCESS: label('[Layout] ResetSucess')
};


export class IncrementAction implements Action {
  type = CounterActionTypes.INCREMENT;
  constructor() { }
}

export class DecrementAction implements Action {
  type = CounterActionTypes.DECREMENT;
  constructor() { }
}

export class ResetAction implements Action {
  type = CounterActionTypes.RESET;
  constructor() { }
}

export class ResetSuccessAction implements Action {
  type = CounterActionTypes.RESET_SUCCESS;
  constructor() { }
}




export type CounterActions =
    IncrementAction
  | DecrementAction
  | ResetAction
  | ResetSuccessAction
