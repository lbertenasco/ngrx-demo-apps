import { ActionReducer, Action } from '@ngrx/store';

import { CounterActionTypes, CounterState, initialCounterState } from './';

export const counterReducer: ActionReducer<CounterState> = (state: CounterState = initialCounterState, action: Action) => {

    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            console.log('NEW');
            return Object.assign({}, state, {
                total : state.total + 1
            });

        case CounterActionTypes.DECREMENT:
            return Object.assign({}, state, {
                total : state.total - 1
            });

        case CounterActionTypes.RESET_SUCCESS:
            return initialCounterState;

        default:
            return state;
    }
}
