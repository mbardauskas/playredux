import * as React from 'react';

interface MoneyEntryProps {
    moneyEntry: IMoneyEntry;
}

export class MoneyEntry extends React.Component<MoneyEntryProps, any> {
    public render() {
        let moneyEntry = this.props.moneyEntry;

        return (
            <div key="entry" className="money-entry">
                <span key="title">{moneyEntry.title}</span>
                <span key="amount">{moneyEntry.amount}</span>
            </div>
        )
    }
}