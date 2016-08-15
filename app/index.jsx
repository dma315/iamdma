import './globals.jsx'
require("./app.scss")

var Test = require('./app/Test.jsx')

class App extends React.Component {
  render () {
    return (
        <div>
            <h1 className="hello">Hello React!</h1>
            <p id="test">I am writing in React!</p>
            <Test text={"Hello I am David Ma"} />
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('wrapper'));