import {combineReducers} from 'redux';
import {items} from './items';
import {meta} from './meta';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    items,
    meta
});