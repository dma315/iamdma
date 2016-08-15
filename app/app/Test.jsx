var Test = React.createClass({
    render: function() {
        var me = this
        return (
            <p className="hi">{me.props.text}</p>
        )
    }
})

module.exports = Test;