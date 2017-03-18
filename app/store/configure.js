import {createStore, applyMiddleware} from 'redux';
import * as reducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export default function configureStore () {
    return createStore(
        reducers.default,
        composeWithDevTools(applyMiddleware(thunk))
    );
}
