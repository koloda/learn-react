import {saveItems} from '../store/items'

const initialState = [];

export function items (state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            const newState = state.concat(action.payload);
            saveItems(newState);
            return newState;

        case 'LOADING_END':
            return state.concat(action.payload);

        default:
            return state;
    }
}