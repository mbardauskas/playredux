import * as React from 'react';
import { connect } from 'react-redux'
import * as ReactDOM from 'react-dom';
import { ListMoneyEntries } from '../components/ListMoneyEntries';

interface ListMoneyEntriesProps {
    moneyEntries?: any;
}

const mapStateToProps = (state) => {
    // @TODO: Investigate why reducer ir wrapping the state. According to examples it should be without reducer.
    return state.reducer;
};

@connect(mapStateToProps)
export class ListMoneyEntriesContainer extends React.Component<ListMoneyEntriesProps, any> {
    public render() {
        return <ListMoneyEntries moneyEntries={this.props.moneyEntries} />;
    }
}

