import {render} from 'react-dom';

var global = require('./global.jsx')
global.load()

var App = React.createClass({
    render: function() {
        return (
            <div>
                <div>
                    { // me.props.children 
                    }
                    Hello

                </div>
            </div>
        )
    }
})

var Test = require('./components/Test.jsx')

window.routes = (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ Test}></IndexRoute>
        </Route>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));