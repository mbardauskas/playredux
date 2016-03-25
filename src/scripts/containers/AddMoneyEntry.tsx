import * as React from 'react';
import { connect } from 'react-redux'
import { addMoneyEntry } from '../actions/index'

interface AddMoneyEntryProps {
    // @TODO: solve optional props
    moneyEntries?: any;
    addMoneyEntry?: (title, amount) => void;
}

const mapStateToProps = (state) => {
    return state.reducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMoneyEntry: (title, amount) => {
            dispatch(addMoneyEntry(title, amount))
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export class AddMoneyEntry extends React.Component<AddMoneyEntryProps, any> {
    public render() {
        let inputTitle;
        let inputAmount;

        return (
            <form onSubmit={e => {
            e.preventDefault();
            if (!inputTitle.value.trim()) {
                return
            }
            this.props.addMoneyEntry(inputTitle.value, inputAmount.value);
            inputTitle.value = '';
            inputAmount.value = '';
            }}>
                <span>
                    <label htmlFor="title">Entry title</label>
                    <input id="title" ref={node => {
                    inputTitle = node
                }}/>
                </span>
                <span>
                    <label htmlFor="amount">Amount</label>
                    <input id="amount" ref={node => {
                    inputAmount = node
                }}/>
                </span>
                <button type="submit">Add money entry</button>
            </form>
        )
    }
}
