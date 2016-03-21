import { combineReducers } from 'redux'

const initialState = {counter: 1};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'score':
            return {
                counter: state.counter + 1
            };

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    reducer
});

export default rootReducer;