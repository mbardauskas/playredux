import * as React from "react";
import * as ReactDOM  from "react-dom";
import HelloWorld = require('./dom');

ReactDOM.render(<HelloWorld name="world" />, document.getElementById('root'));