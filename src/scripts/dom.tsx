import * as React from 'react';

interface HelloWorldProps {
    name: string;
}

var HelloMessage = React.createClass<HelloWorldProps, any>({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

export = HelloMessage;
