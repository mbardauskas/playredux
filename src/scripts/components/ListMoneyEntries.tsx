import * as React from 'react';
import { MoneyEntry } from '../components/MoneyEntry';

interface ListMoneyEntriesProps {
    moneyEntries: IMoneyEntry[];
}

export class ListMoneyEntries extends React.Component<ListMoneyEntriesProps, any> {
    public render() {
        return (
            <div className="money-entries-list">
                {this.props.moneyEntries.map((moneyEntry:IMoneyEntry) => {
                    let key = 'entry-' + moneyEntry.id;
                    return <MoneyEntry key={key} moneyEntry={moneyEntry} />;
                })}
            </div>
        )
    }
}