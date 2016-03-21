import * as React from "react";
import * as ReactDOM  from "react-dom";
import HelloWorld = require('./dom');

interface AppProps {
}

export default React.createClass<AppProps, any>({
    render: function() {
        return <div className="stinks"><HelloWorld name="world" /></div>;
    }
});
