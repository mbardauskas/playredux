import * as React from "react";
import * as ReactDOM  from "react-dom";
import { AddMoneyEntry } from "./containers/AddMoneyEntry"
import { ListMoneyEntriesContainer } from "./containers/ListMoneyEntries"
import * as hello from '../../node_modules/hellojs/dist/hello.all';

interface AppProps {
}

export default React.createClass<AppProps, any>({
    login: () => {
        hello('google')
            .on('auth.login', function(auth) {
                // doesn't work somehow
                console.log('events', auth);
            })
            .init({
                google: '305448987364-etvh8ig5t7jj9rvqsqulr8ugbvs6n3jl.apps.googleusercontent.com'
            })
            .login('google', {
                redirect_uri: window.location.href,
            }, function() {
                console.log('callback', arguments);
            });
    },
    render: function() {
        return <div className="app">
            <button onClick={this.login}>Login</button>
            <AddMoneyEntry />
            <ListMoneyEntriesContainer />
        </div>;
    }
});
