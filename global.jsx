var GlobalLoader = {
    load: function() {
        // RB
        window.React = require('react');
        window.ReactDOM = require('react-dom');
        window.RB = require("react-bootstrap")


        // Routing
        window.Router = require('react-router').Router
        window.Route = require('react-router').Route
        window.RouteHandler = require('react-router').RouteHandler
        window.IndexRoute = require('react-router').IndexRoute
        window.Link = require('react-router').Link
        window.browserHistory = require('react-router').browserHistory
        
        // External Libraries
        window._ = require('lodash')
    }
}

module.exports = GlobalLoader;