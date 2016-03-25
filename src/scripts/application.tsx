import * as React from "react";
import * as ReactDOM  from "react-dom";
import { AddMoneyEntry } from "./containers/AddMoneyEntry"
import { ListMoneyEntriesContainer } from "./containers/ListMoneyEntries"

interface AppProps {
}

export default React.createClass<AppProps, any>({
    render: function() {
        return <div className="app">
            <AddMoneyEntry />
            <ListMoneyEntriesContainer />
        </div>;
    }
});
