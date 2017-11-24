let Minus = React.createClass({
    render(){
        return (
            <div className="minus" onClick={this.props.toMinus}>
                <div className="circle">
                    <div className="h_border">
                    </div>
                </div>
            </div>
        );
    }
});

export {Minus};