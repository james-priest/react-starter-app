// Code fix and formating can be tested on this file
//  by opening command palette and choosing:
//  "ESLint: Fix all auto-fixable Problems"
// Alternatively, "fix on save" can be set with
//  { "eslint.autoFixOnSave": true }
//  in VSCode Settings
var React = require("react");
var ReactDOM = require("react-dom");

class App extends React.Component {
  render() {
    return (
      <h1 className="App" autoFocus>
        /*  */
        Hello React!
      </h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));