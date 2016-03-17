import * as React from "react";
import * as ReactDOM  from "react-dom";
import { createStore } from 'redux'
import HelloWorld = require('./dom');

let reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
};

let store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(<HelloWorld name={store.getState()} />, document.getElementById('root'));