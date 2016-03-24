import * as React from 'react';
import { connect } from 'react-redux'
import { addMoneyEntry } from '../actions/index'

function mapStateToProps(state: any) {
    return state;
}

@connect(mapStateToProps)
export class AddMoneyEntry extends React.Component<any, any> {
    public render() {
        let inputTitle;
        let inputAmount;

        return (
            <div>
                <form onSubmit={e => {
                e.preventDefault();
                if (!inputTitle.value.trim()) {
                    return
                }
                this.props.dispatch(addMoneyEntry(inputTitle.value, inputAmount.value));
                inputTitle.value = '';
                inputAmount.value = '';
                }}>
                    <div>
                        <label htmlFor="title">Entry title</label>
                        <input id="title" ref={node => {
                        inputTitle = node
                    }}/>
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input id="amount" ref={node => {
                        inputAmount = node
                    }}/>
                    </div>
                    <button type="submit">Add money entry</button>
                </form>
            </div>
        )
    }
}
