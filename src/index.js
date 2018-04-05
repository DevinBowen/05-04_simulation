import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import createStore from './store';

ReactDOM.render(
    <Provider store ={createStore}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
, document.getElementById('root'));
unregister();
