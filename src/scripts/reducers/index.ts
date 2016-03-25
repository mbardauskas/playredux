import { combineReducers } from 'redux'

const initialState:AppState = {
    moneyEntries: []
};

const reducer = (state:AppState = initialState, action) => {
    switch (action.type) {
        case 'ADD_MONEY_ENTRY':
            action = action as IMoneyEntryAction;
            return {
                moneyEntries: [
                    ...state.moneyEntries,
                    {
                        id: action.id,
                        title: action.title,
                        amount: action.amount
                    }
                ]
            };

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    reducer
});

export default rootReducer;