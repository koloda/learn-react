import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {Route, Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import ContactsApp from './containers/ContactsApp';
import Contact from './containers/Contact';
import About from './components/About';

import configureStore from './store/configure'

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={ContactsApp} />
            <Route path="/contact/:id" component={Contact} />
            <Route path="/about" component={About} />
        </Router>
    </Provider>,
    document.getElementById('container')
);