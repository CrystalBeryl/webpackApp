
let SingleData = React.createClass({

    render(){
        return (
            <div className={`singleData ${(this.props.i+1)%2 ? 'odd': 'even'}`}>
                <div className="name">
                    <span>{this.props.name}</span>
                </div>
                <div className="number">
                    <div className="price" style={{paddingRight: '1rem',color: 'red'}}>
                        <span>￥</span>
                        <span>{this.props.price}</span>
                    </div>
                    <div className="minus" onClick={this.props.toMinus}>
                        <span className="icon_color">-</span>
                    </div>
                    <span style={{width: '2rem'}}>{this.props.num}</span>
                    <div className="plus" onClick={this.props.toPlus}>
                        <span className="icon_color">+</span>
                    </div>
                </div>
                <div className="singleTotalPrice">
                    <span style={{width: '2rem'}}>{this.props.num*this.props.price}</span>
                </div>
            </div>
        )
    }

});

export {SingleData}