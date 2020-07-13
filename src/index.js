import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {reducedSetLoggedIn , reducedSetProfile} from './components/Redux/reducers'



const logger = createLogger();

const rootReducers = combineReducers({reducedSetLoggedIn, reducedSetProfile});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
