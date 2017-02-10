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

// window.routes = (
//     <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
//         <Route path="/" component={ App }>
//         </Route>
//     </Router>
// )

ReactDOM.render(<App />, document.getElementById('root'));