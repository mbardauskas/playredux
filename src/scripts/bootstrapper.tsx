import * as React from "react";
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Application from './application'
import configureStore from './store/configureStore'

const store = configureStore({});

render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('root')
);