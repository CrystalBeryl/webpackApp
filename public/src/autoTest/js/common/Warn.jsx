
var Warn = React.createClass({
    render: function () {
        return (
            <div className="alert alert-danger">
                <span>{this.props.warning}</span>
                <button className="close" data-close="alert"></button>
            </div>
        );
    }
});

module.exports=Warn;