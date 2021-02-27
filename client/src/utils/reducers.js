import { useReducer } from 'react';

import {
    CREATE_SET,
    DELETE_SET,
    CREATE_CARD,
    EDIT_CARD,
    DELETE_SET
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        //switch between action types
        case CREATE_SET: 
            return {
                ...state,
                sets: [...state.sets, ...action.sets],
            }

        //if none of those actions, do not update state
        default:
            return state;
    }
};

export function useSetReducer(initialState) {
    return useReducer(reducer, initialState)
}