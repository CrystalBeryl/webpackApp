import {Link} from 'react-router'
let ShoppingCart = React.createClass({
    componentDidUpdate(){
        console.log("totalNums2:"+window._totalNums  );

    },
    render(){
        return (
            <div className="shopping">
                <div className={`shoppingCart ${this.props.empty ? 'empty' : ''}`}>
                    <div className={`numIcon ${this.props.empty ? 'invisible' : ''}`}>
                        {this.props.empty ? '' : this.props.totalNums}
                    </div>
                    <div className="money">
                        <span>￥</span>
                        {this.props.totalPrices}
                    </div>
                </div>
                <Link to={`${this.props.empty ? '' : '/create'}`} className={`chooseButton ${this.props.empty ? 'empty' : ''}`}>
                    {this.props.empty ? '空空如也' : '我选好了'}
                </Link>
            </div>
        );
    }
});
export {ShoppingCart};