var Common = require('../../common/base/js/Common');
import './style.scss';
var Item = React.createClass({

    componentWillMount:function () {
        Common.handleUA();
    },

    render: function () {
        let {
            url,
            productName
        }=this.props;
        return (
            <div className="container clearfix">
                <div className="img-container"><img src={url} className="img"/></div>
                <div className="productName">{productName}</div>
            </div>
        );
    }


});


ReactDOM.render(<Item productName="测试娃娃" url="http://g.search3.alicdn.com/img/i3/133840336189807176/TB22hJDX90mpuFjSZPiXXbssVXa_!!0-saturn_solar.jpg_220x220.jpg_.webp" />,
document.getElementById("container"));